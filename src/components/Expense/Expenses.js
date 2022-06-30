import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredyear] = useState("2022");
  const FilteredYear = (selected) => {
    setFilteredyear(selected);
  };

  const filteredExpense = props.date.filter((items) => {
    return items.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter info={filteredYear} functionFilter={FilteredYear} />
      <ExpensesChart dataPoint = {filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
