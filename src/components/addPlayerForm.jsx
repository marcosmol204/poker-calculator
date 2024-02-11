import React, { useState } from "react";
import styles from "./addPlayerForm.module.scss";
function AddPlayerForm({ addPlayer }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.mainContainer}>
      <label>הוסף שחקן בשם</label>
      <input
        type="number"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        placeholder="אייל 'מיסמאצ' והב"
        required
      />
      <button type="submit" className={styles.button}>
        הוסף
      </button>
    </form>
  );
}

export default AddPlayerForm;
