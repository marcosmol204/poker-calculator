import { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

// Create the context
export const GameContext = createContext();

// Create a provider component
export const GameProvider = ({ children }) => {
  const [players, setPlayers] = useLocalStorage("players", []);

  const addPlayer = (name, jetons) => {
    setPlayers([
      ...players,
      { name, chips: Number(jetons), bought: Number(jetons) },
    ]);
  };

  const deleteAllPlayer = () => {
    setPlayers([]);
  };

  const addBoughtJetons = (name, jetons) => {
    setPlayers((prev) => {
      const newState = prev.map((player) => {
        if (player.name !== name) return player;
        const newBought = Number(player.bought) + Number(jetons);
        return {
          ...player,
          bought: newBought,
        };
      });
      return newState;
    });
  };

  const getPlayer = (name) => {
    return players.find((player) => player.name === name);
  };

  const editJetons = (name, jetons) => {
    setPlayers((prev) => {
      const newState = prev.map((player) => {
        if (player.name !== name) return player;
        return {
          ...player,
          chips: Number(jetons),
        };
      });
      return newState;
    });
  };

  return (
    <GameContext.Provider
      value={{
        players,
        addPlayer,
        deleteAllPlayer,
        addBoughtJetons,
        getPlayer,
        editJetons,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
