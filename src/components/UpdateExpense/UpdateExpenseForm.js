import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateExpenseForm.css";

const UpdateExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getExpenseById();
  }, []);

  const textChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const updateHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/expanse/${id} `, {
        title,
        amount,
        date,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getExpenseById = async () => {
    const response = await axios.get(`http://localhost:5000/expanse/${id}`);
    console.log(response);
    setTitle(response.data.title);
    setAmount(response.data.amount);
    setDate(response.data.date);
  };

  return (
    <form onSubmit={updateHandler}>
      <div className="update-expense__controls">
        <div className="update-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={textChangeHandler} />
        </div>
        <div className="update-expense__control">
          <label>Amounts</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="update-expense__control">
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
      <div className="update-expense__actions">
        <button type="submit">Update expense</button>
      </div>
    </form>
  );
};

export default UpdateExpenseForm;
