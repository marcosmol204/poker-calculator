import React from "react";
import PlayerList from "./components/playerList";
import AddPlayerForm from "./components/addPlayerForm";
import PaymentButton from "./components/paymentButton";
import { useLocalStorage } from "@uidotdev/usehooks";
import styles from "./app.module.scss";
import pokerImg from "./assets/poker.png";
function App() {
  const [players, setPlayers] = useLocalStorage("players", []);

  const addPlayer = (name) => {
    setPlayers([...players, { name, bought: 0, chips: 0 }]);
  };

  const deletePlayer = (name) => {
    setPlayers(players.filter((player) => player.name !== name));
  };

  const updatePlayer = (index, data) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = { ...updatedPlayers[index], ...data };
    setPlayers(updatedPlayers);
  };

  return (
    <div className={styles.mainContainer}>
      <img src={pokerImg} className={styles.pokerImg} />
      <h1 className={styles.title}>מחשבון פוקר</h1>
      <PlayerList
        players={players}
        updatePlayer={updatePlayer}
        deletePlayer={deletePlayer}
      />
      <AddPlayerForm addPlayer={addPlayer} />
      <PaymentButton players={players} />
    </div>
  );
}

export default App;
