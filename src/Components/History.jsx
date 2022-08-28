import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import SingleTransaction from "./SingleTransaction";

const History = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <SingleTransaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default History;
