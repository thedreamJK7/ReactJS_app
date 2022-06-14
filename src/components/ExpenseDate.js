import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-Us", { month: "long" });
    const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
    const year = props.date.getFullYear();
    return (
        <div className="ExpenseDate">
            <div className="ExpenseDate_month">{month}</div>
            <div className="ExpenseDate_year">{year}</div>
            <div className="ExpenseDate_day">{day}</div>
        </div>
    );
}

export default ExpenseDate;
