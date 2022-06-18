import React from "react";
import Card from "../UI/card";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="ExpenseDate">
      <div className="ExpenseDate_month">{month}</div>
      <div className="ExpenseDate_year">{year}</div>
      <div className="ExpenseDate_day">{day}</div>
    </Card>
  );
};

export default ExpenseDate;
