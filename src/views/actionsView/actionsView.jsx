import { useLocalStorage } from "@uidotdev/usehooks";

import styles from "./actionsView.module.scss";
import { PlayerList, AddPlayerForm, PaymentButton } from "./components";

export function ActionsView() {
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
