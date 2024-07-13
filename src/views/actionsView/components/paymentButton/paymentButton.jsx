import React, { useState } from "react";
import { calculatePayments } from "../../../../logic/calculatePayments";
import styles from "./paymentButton.module.scss";

export function PaymentButton({ players }) {
  const [payments, setPayments] = useState([]);
  const handleCalculatePayment = () => {
    const result = calculatePayments(players);
    if (result === null) {
      return alert("נראה שיש יותר זיטונים ממה שסה״כ נקנה");
    }
    setPayments(result);
  };

  const totalChips = players.reduce((acc, curr) => {
    acc += curr.bought;
    return acc;
  }, 0);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.total}>סה״כ בקופה:{totalChips} </div>
      <button onClick={handleCalculatePayment} className={styles.button}>
        חשב קיזוזים
      </button>
      {payments.map((el, i) => {
        return (
          <div key={i} className={styles.paymentsContainer}>
            <div>{el.from} </div>
            <div>צריך להעביר ל{el.for}</div>
            <div>סה״כ :{el.amount} </div>
          </div>
        );
      })}
    </div>
  );
}

export default PaymentButton;
