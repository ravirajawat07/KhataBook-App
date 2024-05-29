import React from "react";

const Dashboard = ({ dark, transactions }) => {
  const income = transactions
    .filter((transactions) => transactions.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expense = transactions
    .filter((transactions) => transactions.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  const balance = transactions.reduce((p, c) => p + c.amount, 0);

  return (
    <div className="row g-2 my-2">
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div
          className={
            dark
              ? "card p-5 bg-dark text-light border "
              : "card p-5 bg-success text-light"
          }
        >
          <h3>Total Income :</h3>
          <h2>{income}</h2>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div
          className={
            dark
              ? "card p-5 bg-dark text-light border "
              : "card p-5 bg-danger text-light"
          }
        >
          <h3>Total Expense :</h3>
          <h2>{expense}</h2>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-4">
        <div
          className={
            dark
              ? "card p-5 bg-dark text-light border "
              : "card p-5 bg-info text-light"
          }
        >
          <h3>Total Balance :</h3>
          <h2>{balance}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
