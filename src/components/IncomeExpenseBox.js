import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const IncomeExpenseBox = () => {
  const { transactions } = useContext(GlobalContext);
  const positiveAmounts = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, amount) => acc + amount, 0);

  const formattedPositiveAmounts = `+${positiveAmounts.toFixed(2)}`;

  const negativeAmounts = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((acc, amount) => acc + amount, 0);

  const formattedNegativeAmounts = `+${negativeAmounts.toFixed(2)}`;
  //you could call them as income and expense

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${positiveAmounts}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${negativeAmounts}</p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpenseBox;
