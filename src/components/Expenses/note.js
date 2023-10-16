import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  // const [filterInfo, setFilterInfo] = useState("2018, 2019, 2020, 2021 & 2022");

  // Derived state
  // let filterInfo = "2018, 2019, 2020, 2021 & 2022";
  // switch (filteredYear) {
  //   case "2018":
  //     // setFilterInfo("2019, 2020, 2021, 2022 & 2023");
  //     filterInfo = "2019, 2020, 2021, 2022 & 2023";
  //     break;
  //   case "2019":
  //     // setFilterInfo("2018, 2020, 2021, 2022 & 2023");
  //     filterInfo = "2018, 2020, 2021, 2022 & 2023";
  //     break;
  //   case "2020":
  //     // setFilterInfo("2018, 2019, 2021, 2022 & 2023");
  //     filterInfo = "2018, 2019, 2021, 2022 & 2023";
  //     break;
  //   case "2021":
  //     // setFilterInfo("2018, 2019, 2020, 2022 & 2023");
  //     filterInfo = "2018, 2019, 2020, 2022 & 2023";
  //     break;
  //   case "2022":
  //     // setFilterInfo("2018, 2019, 2020, 2021 & 2023");
  //     filterInfo = "2018, 2019, 2020, 2021 & 2023";
  //     break;
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
