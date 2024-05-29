import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({
  dark,
  transactions,
  removeTransaction,
  editTransaction,
}) => {
  if (transactions.length === 0)
    return (
      <h3 className={dark ? "my-4 text-light text-center" : "my-4 text-center"}>
        No Transaction Yet
      </h3>
    );

  return (
    <>
      <h3 className={dark ? "my-4 text-light text-center" : "my-4 text-center"}>
        All Transactions
      </h3>

      <ul className="list-group my-2">
        {transactions.map((transaction) => (
          <ListItem
            dark={dark}
            key={transaction.id}
            transaction={transaction}
            removeTransaction={removeTransaction}
            editTransaction={editTransaction}
          />
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
