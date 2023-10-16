import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items, deleteExpense }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date)}
          deleteItem={() => deleteExpense(expense.id)}
          id={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
