import React, { useEffect, useState } from "react";

const Form = ({ dark, addTransaction, edit, updateTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.isEdit) {
      updateTransaction({
        id: edit.transaction.id,
        text,
        amount: +amount,
      });
    } else {
      addTransaction(text, amount);
    }

    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className={dark ? "card p-3 bg-dark text-light border" : "card p-3"}>
      <h5 className="text-center my-2">Record Your Transaction</h5>
      <form className="my-2" onSubmit={handleSubmit}>
        <input
          required
          type="number"
          className="form-control"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter Description"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          className={
            dark
              ? "btn btn-outline-dark w-100 text-light shadow my-2 border"
              : "btn btn-outline-primary w-100 my-2 shadow"
          }
        >
          Save Transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
