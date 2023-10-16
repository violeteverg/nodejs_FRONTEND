// // import React, { useState } from "react";
// // import "./ExpenseForm.css";

// // const ExpenseForm = () => {
// //   const [userInput, setUserInput] = useState({
// //     enteredTitle: "",
// //     enteredAmount: "",
// //     enteredDate: "",
// //   });

// //   const textChangeHandler = (event) => {
// //     setUserInput({
// //       ...userInput,
// //       enteredTitle: event.target.value,
// //     });
// //   };

// //   const amountChangeHandler = (event) => {
// //     setUserInput({
// //       ...userInput,
// //       enteredAmount: event.target.value,
// //     });
// //   };

// //   const dateChangeHandler = (event) => {
// //     setUserInput({
// //       ...userInput,
// //       enteredDate: event.target.value,
// //     });
// //   };

// //   const { enteredTitle, enteredAmount, enteredDate } = userInput;

// //   return (
// //     <form>
// //       <div className="new-expense__controls">
// //         <div className="new-expense__control">
// //           <label>Title: {enteredTitle}</label>
// //           <input type="text" onChange={textChangeHandler} />
// //         </div>
// //         <div className="new-expense__control">
// //           <label>Amount: {enteredAmount}</label>
// //           <input
// //             type="number"
// //             min="0.01"
// //             step="0.01"
// //             onChange={amountChangeHandler}
// //           />
// //         </div>
// //         <div className="new-expense__control">
// //           <label>Date: {enteredDate}</label>
// //           <input
// //             type="date"
// //             min="2018-01-01"
// //             max="2023-12-30"
// //             onChange={dateChangeHandler}
// //           />
// //         </div>
// //       </div>
// //       <div className="new-expense__actions">
// //         <button type="submit">Add expense</button>
// //       </div>
// //     </form>
// //   );
// // };

// // export default ExpenseForm;

// import { useState } from "react";

// function Panel({ title, children }) {
//   const [isActive, setIsActive] = useState(false);
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ) : (
//         <button onClick={() => setIsActive(true)}>Show</button>
//       )}
//     </section>
//   );
// }

// export default function Accordion() {
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel title="About">
//         With a population of about 2 million, Almaty is Kazakhstan's largest
//         city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel title="Etymology">
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
//         "apple" and is often translated as "full of apples". In fact, the region
//         surrounding Almaty is thought to be the ancestral home of the apple, and
//         the wild <i lang="la">Malus sieversii</i> is considered a likely
//         candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }

//================================

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //can use multiple state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const textChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // //~Alternative way using shared function
  // const inputChangeHandler = (identifier, value) => {
  //   identifier === "title"
  //     ? setEnteredTitle(value)
  //     : identifier === "amount"
  //     ? setEnteredAmount(value)
  //     : setEnteredDate(value);
  // };

  // //instead doing multiple state ,u can use ONE STATE
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const textChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });

  //   //use this function syntax whenever your state update depends on the previous state
  //   setUserInput((prevstate) => {
  //     return {...prevstate,enteredTitle: event.target.value}
  //   })
  // };

  // const amountChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });
  // };
  // const { enteredTitle, enteredAmount, enteredDate } = userInput;

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //memanggil onSaveExpenseData dari NewExpense,
    //nantinya pada NewExpense akan menerima data yang dikirim dari sini
    props.onSaveExpenseData(expenseData);

    //mengosongkan form setelah di panggil
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={textChangeHandler}

            // ~Alternative
            // onChange={(event) => {
            //   inputChangeHandler("title", event.target.value);
            // }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amounts</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2023-12-30"
            value={enteredDate}
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
