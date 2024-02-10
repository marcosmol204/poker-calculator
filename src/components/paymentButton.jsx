import React, { useState } from "react";
import { calculatePayments } from "../logic/calculatePayments";
import styles from "./paymentButton.module.scss";
function PaymentButton({ players }) {
  const [payments, setPayments] = useState([]);
  const handleCalculatePayment = () => {
    const result = calculatePayments(players);
    if (result === null) {
      return alert("נראה שיש יותר זיטונים ממה שסה״כ נקנה");
    }
    setPayments(result);
  };

  return (
    <div className={styles.mainContainer}>
      <button onClick={handleCalculatePayment} className={styles.button}>
        חשב קיזוזים
      </button>
      {payments.map((el, i) => {
        return (
          <div key={i} style={{ display: "flex" }}>
            <div>{el.from} </div>
            <div>צריך להעביר ל{el.for}</div>
            <div>סה״כ {el.amount}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PaymentButton;
