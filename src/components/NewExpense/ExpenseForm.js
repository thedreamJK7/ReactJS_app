import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [bool, setBool] = useState(false);

  const titleChangedHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangedHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangedHandler = (e) => {
    setDate(e.target.value);
  };
  const submitChangedHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onchange(expenseDate);
    setTitle('');
    setAmount('');
    setDate('');
    setBool(false);
  };
  const cancelChangedHandler = () => {
    setBool(false);
  }
  const setBoolChangedHandler = () => {
    setBool(true);
  }
  if (bool) {
    return (
      <form onSubmit={submitChangedHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangedHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              onChange={amountChangedHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={dateChangedHandler}
              value={enteredDate}
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit">
              Add Expense
            </button>
            <button onClick={cancelChangedHandler}>Cancel</button>
          </div>
        </div>
      </form>
    );
  } else {
    return <button onClick={setBoolChangedHandler}>Add New Expense</button>;
  }
};

export default ExpenseForm;
