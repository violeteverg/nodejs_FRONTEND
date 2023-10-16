import React from "react";
import { Link } from "react-router-dom";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropDownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <Link to={"add"} className="expense-add">
          Add new+
        </Link>
        <select value={props.selected} onChange={dropDownHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
