import React, { useContext } from "react";
import { GlobalContext } from "../Context";

const AddTransaction = () => {
  const { text, setText, amount, setAmount, onSubmit, error, errorMessage } =
    useContext(GlobalContext);

  return (
    <>
      <h3>Add new transaction</h3>
      {errorMessage === true && <span className="error">{error}</span>}
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income){" "}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
