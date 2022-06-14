import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
      date: new Date(2022, 5, 4),
    },
    {
      id: "e3",
      title: "Iphone 14 pro",
      amount: 2300,
      date: new Date(2022, 11, 12),
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        id={expenseitem[0].id}
        title={expenseitem[0].title}
        amount={expenseitem[0].amount}
        date={expenseitem[0].date}
      />
      <ExpenseItem
        id={expenseitem[1].id}
        title={expenseitem[1].title}
        amount={expenseitem[1].amount}
        date={expenseitem[1].date}
      />
      <ExpenseItem
        id={expenseitem[2].id}
        title={expenseitem[2].title}
        amount={expenseitem[2].amount}
        date={expenseitem[2].date}
      />
    </div>
  );
}

export default App;
