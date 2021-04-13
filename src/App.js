import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Expense from "./components/IncomeExpenses";
import Trans from "./components/TransationList";
import AddTrans from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./app.css";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expense />
        <Trans />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
}
