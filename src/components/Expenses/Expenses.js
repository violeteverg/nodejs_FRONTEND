import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = () => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expanses, setExpanses] = useState([]);

  useEffect(() => {
    getExpanse();
  }, []);

  const getExpanse = async () => {
    const response = await axios.get(`http://localhost:5000/expanse`);
    setExpanses(response.data);
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/expanse/${id}`);
      getExpanse();
    } catch (error) {
      console.log(error);
    }
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expanses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getFullYear().toString() === filteredYear;
  });

  console.log(expanses);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} deleteExpense={deleteExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
