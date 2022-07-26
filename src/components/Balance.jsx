import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";

// Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    " $ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

function Balance(props) {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => {
    return acc + item;
  }, 0);

  console.log("total: " + total);

  return (
    <div>
      <h4> Balance </h4>
      <h1> {moneyFormatter(total)} </h1>
    </div>
  );
}

export default Balance;
