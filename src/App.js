import React, {useState} from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenseItemPast = [
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
    date: new Date(2020, 5, 4),
  },
  {
    id: "e3",
    title: "Iphone 14 pro",
    amount: 2300,
    date: new Date(2022, 11, 12),
  },
];
function App() {

  const [expenseItem, setExpenseItem] = useState(expenseItemPast);
  const addExpenseHandler = (expenses) => {
    setExpenseItem((pastExpense) => {
      return [expenses, ...pastExpense];
    })
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses date={expenseItem} />
    </div>
  );
}

export default App;
