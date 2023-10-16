import React, { useState } from "react";
import axios from "axios";
import "./ExpenseForm.css";
import { useNavigate } from "react-router-dom";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const textChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`http://localhost:5000/expanse `, {
        title,
        amount,
        date,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={textChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amounts</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2023-12-30"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
