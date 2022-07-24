import React, { useContext } from "react";

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      Salary <span> +50,000</span>
      <button>x</button>
    </li>
  );
}

export default Transaction;
