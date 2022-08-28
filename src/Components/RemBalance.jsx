import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const RemBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.filter((transaction) => transaction.amount > 0);
  const total = amounts
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);


  const expense = transactions.filter((transaction) => transaction.amount < 0);
  const total1 = expense
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

    const sign = total < 0 ? "" : "-";

  return (
    <div>
      <div className="Balance-container">
        <div>
          <h4>INCOME</h4>
          <p className="income">${total}</p>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <p className="expense">{sign}${Math.abs(total1)}</p>
        </div>
      </div>
    </div>
  );
};

export default RemBalance;
