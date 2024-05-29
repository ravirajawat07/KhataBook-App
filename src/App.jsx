import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [dark, setDark] = useState(false);

  const changeTheme = () => {
    setDark(dark ? false : true);
  };

  const [transactions, setTransactions] = useState([]);

  // Add Transction

  const addtransaction = (text, amount) => {
    setTransactions([
      { id: crypto.randomUUID(), text: text, amount: parseInt(amount) },
      ...transactions,
    ]);
  };

  //  Delete transaction

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  // Edit Transaction

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  const editTransaction = (transaction) => {
    setEdit({
      transaction: transaction,
      isEdit: true,
    });
  };

  // Update Transaction

  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((item) =>
        item.id === updatedTransaction.id ? updatedTransaction : item
      )
    );
    setEdit({ transaction: {}, isEdit: false });
  };

  return (
    <>
      <Navbar dark={dark} changeTheme={changeTheme} />
      <div
      id="container"
        className={dark ? "container-fluid p-4 bg-dark" : "container-fluid p-4"}
      >
        <Form
          dark={dark}
          addTransaction={addtransaction}
          edit={edit}
          updateTransaction={updateTransaction}
        />
        <Dashboard dark={dark} transactions={transactions} />
        <ListGroup
          dark={dark}
          transactions={transactions}
          removeTransaction={removeTransaction}
          editTransaction={editTransaction}
        />
      </div>
    </>
  );
};

export default App;
