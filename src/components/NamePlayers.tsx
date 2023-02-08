import { useState } from "react";
import { useFightsFirstDispatch } from "../state/FightsFirstProvider";
import { namePlayers } from "../state/actions";

export default function NamePlayers() {
  const [playerOneName, setPlayerOneName] = useState<string>("");
  const [playerTwoName, setPlayerTwoName] = useState<string>("");
  const dispatch = useFightsFirstDispatch();

  return (
    <div className="name-players">
      <h1>Who Fights First?</h1>
      <h2>Who's playing?</h2>
      <label>
        Player/Team Name:{" "}
        <input
          value={playerOneName}
          onChange={(e) => setPlayerOneName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Player/Team Name:{" "}
        <input
          value={playerTwoName}
          onChange={(e) => setPlayerTwoName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button
        disabled={false} // TODO
        onClick={(e) => dispatch(namePlayers(playerOneName, playerTwoName))}
      >
        FIGHT!
      </button>
    </div>
  );
}
