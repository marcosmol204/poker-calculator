// PlayerList.js
import React, { useState } from "react";
import styles from "./playerList.module.scss";

function PlayerList({ players, updatePlayer, deletePlayer }) {
  const handleboughtChange = (index, value) => {
    updatePlayer(index, { bought: parseFloat(value) });
  };

  const handleChipsChange = (index, value) => {
    updatePlayer(index, { chips: parseFloat(value) });
  };

  return (
    <div className={styles.mainContainer}>
      <ul className={styles.playersContainer}>
        {players.map((player, index) => (
          <li key={index} className={styles.playerContainer}>
            {player.name}
            <div className={styles.playerData}>
              סה״כ קניות:
              <input
                type="number"
                value={player.bought}
                onChange={(e) => handleboughtChange(index, e.target.value)}
              />
              מצב נוכחי:
              <input
                type="number"
                value={player.chips}
                onChange={(e) => handleChipsChange(index, e.target.value)}
              />
            </div>
            <div
              onClick={() => {
                deletePlayer(player.name);
              }}
            >
              ❌
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
