import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const TransactionBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const sign = total >= 0 ? " " : "-";

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{sign}${Math.abs(total)}</h1>
    </div>
  );
};

export default TransactionBalance;
