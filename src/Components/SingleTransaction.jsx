import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const SingleTransaction = ({ transaction }) => {
  const { deleteHandler } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : " ";

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={(e) => deleteHandler(transaction.id)}
          className="delete-btn"
        >
          X
        </button>
      </li>
    </div>
  );
};

export default SingleTransaction;
