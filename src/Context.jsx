import React, { useState, useEffect } from "react";

const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [transactions, setTransactions] = useState(
    localStorage.transactions ? JSON.parse(localStorage.transactions) : []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (amount === "" && text === "") {
      setErrorMessage(true);
      setError("Please enter a valid Details and amount");
      return;
    }

    if (text === "") {
      setErrorMessage(true);
      setError("Please Provide a valid Details");

      setText("");
      setAmount("");
      return;
    }

    if (amount === "") {
      setErrorMessage(true);
      setError("Please Provide a valid Amount");

      setText("");
      setAmount("");
      return;
    }

    if (amount === "+0" || amount === "-0") {
      setErrorMessage(true);
      setError("Amount can't be zero");

      setText("");
      setAmount("");
    } else {
      setErrorMessage(false);
      setTransactions([
        ...transactions,
        {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount,
        },
      ]);

      setText("");
      setAmount("");
    }
  };

  const deleteHandler = (transitId) => {
    setTransactions(transactions.filter(({ id }) => id !== transitId));
  };

  const state = {
    text,
    setText,
    amount,
    setAmount,
    transactions,
    setTransactions,
    errorMessage,
    setErrorMessage,
    error,
    setError,
    onSubmit,
    deleteHandler,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

const Consumer = GlobalContext.Consumer;

export { GlobalContext, Provider, Consumer };
