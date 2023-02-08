export type ActionTypes = NamePlayers;
export const NAME_PLAYERS = "NAME_PLAYERS";

export type NamePlayers = {
  type: "NAME_PLAYERS";
  playerOneName: string;
  playerTwoName: string;
};

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
