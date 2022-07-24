import { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
      </GlobalProvider>
    </div>
  );
}

export default App;
