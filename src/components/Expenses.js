import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
    return (
      <div className="expenses">
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
      </div>
    );
}

export default Expenses;