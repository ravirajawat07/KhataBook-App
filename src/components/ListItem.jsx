import React from "react";

const ListItem = ({
  dark,
  transaction,
  removeTransaction,
  editTransaction,
}) => {
  return (
    <li
      className={
        dark ? "list-group-item bg-dark border text-light" : "list-group-item"
      }
    >
      <h3>
        {transaction.text} : {transaction.amount}{" "}
      </h3>
      <span className="float-end">
        <button
          className={
            dark
              ? "btn btn-outline-dark mx-2 border text-light"
              : "btn btn-outline-warning mx-2"
          }
          onClick={() => editTransaction(transaction)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => removeTransaction(transaction.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
