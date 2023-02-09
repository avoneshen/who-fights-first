export type ActionTypes = NamePlayers | SelectActivePlayer;

export const NAME_PLAYERS = "NAME_PLAYERS";
export const SELECT_ACTIVE_PLAYER = "SELECT_ACTIVE_PLAYER";

export type NamePlayers = {
  type: typeof NAME_PLAYERS;
  playerOneName: string;
  playerTwoName: string;
};

export type SelectActivePlayer = {
  type: typeof SELECT_ACTIVE_PLAYER,
  activePlayer: string,
}

export function namePlayers(
  playerOneName: string,
  playerTwoName: string
): NamePlayers {
  return {
    type: "NAME_PLAYERS",
    playerOneName,
    playerTwoName,
  };
}

export function selectActivePlayer(activePlayer: string): SelectActivePlayer { 
  return {
    type: "SELECT_ACTIVE_PLAYER",
    activePlayer
  }
}
