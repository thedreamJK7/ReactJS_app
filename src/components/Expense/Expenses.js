import React from "react";
import ExpenseItem from "../Expense/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesFilter />
      <ExpenseItem
        id={props.date[0].id}
        title={props.date[0].title}
        amount={props.date[0].amount}
        date={props.date[0].date}
      />
      <ExpenseItem
        id={props.date[1].id}
        title={props.date[1].title}
        amount={props.date[1].amount}
        date={props.date[1].date}
      />
      <ExpenseItem
        id={props.date[2].id}
        title={props.date[2].title}
        amount={props.date[2].amount}
        date={props.date[2].date}
      />
    </Card>
  );
};

export default Expenses;
