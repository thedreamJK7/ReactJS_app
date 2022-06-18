import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
const NewExpense = (props) => {
    const expenseHandler = (expenseDate) => {
      const newexpense = {
        ...expenseDate,
      };
      props.onAddExpense(newexpense);
    };
    return (
      <div className="new-expense">
        <ExpenseForm onchange={expenseHandler} />
      </div>
    );
}

export default NewExpense;