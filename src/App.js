import React from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenseitem = [
    {
      id: "e1",
      title: "New Desk(Wooden)",
      amount: 450,
      date: new Date(2022, 10, 4),
    },
    {
      id: "e2",
      title: "Lamborghini",
      amount: 450000,
      date: new Date(2023, 5, 4),
    },
    {
      id: "e3",
      title: "Iphone 14 pro",
      amount: 2300,
      date: new Date(2022, 11, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses date={expenseitem} />
    </div>
  );
}

export default App;
