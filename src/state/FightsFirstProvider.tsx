import {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react";
import { ActionTypes, NAME_PLAYERS } from "./actions";

let playerIDCounter = 0;

export enum Screens {
  NamePlayers = "NAME_PLAYERS",
  SelectActivePlayer = "SELECT_ACTIVE_PLAYER",
  EnterUnits = "ENTER_UNITS",
}

export const FightsFirstContext = createContext<null | FightsFirstState>(null);
export const FightsFirstDispatchContext =
  createContext<null | Dispatch<ActionTypes>>(null);

export function useFightsFirst() {
  const fightsFirstContext = useContext(FightsFirstContext);

  if (!fightsFirstContext) {
    throw new Error(
      "useFightsFirst has to be used within <FightsFirstContext.Provider>"
    );
  }

  return fightsFirstContext;
}

export function useFightsFirstDispatch() {
  const fightsFirstDispatchContext = useContext(FightsFirstDispatchContext);

  if (!fightsFirstDispatchContext) {
    throw new Error(
      "useFightsFirst has to be used within <fightsFirstDispatchContext.Provider>"
    );
  }

  return fightsFirstDispatchContext;
}

export default function FightsFirstProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(
    FightsFirstReducer,
    null,
    produceInitialState
  );

  return (
    <FightsFirstContext.Provider value={state}>
      <FightsFirstDispatchContext.Provider value={dispatch}>
        {children}
      </FightsFirstDispatchContext.Provider>
    </FightsFirstContext.Provider>
  );
}

// reducer
function FightsFirstReducer(
  state: FightsFirstState,
  action: ActionTypes
): FightsFirstState {
  const type = action.type;

  switch (type) {
    case NAME_PLAYERS: {
      const { playerOneName, playerTwoName } = action;
      const playerOneID = playerIDCounter++;
      const playerTwoID = playerIDCounter++;

      return {
        ...state,
        players: {
          [playerOneID]: {
            name: playerOneName,
            units: [],
          },
          [playerTwoID]: {
            name: playerTwoName,
            units: [],
          },
        },
        actingPlayer: String(playerOneID),
        opposingPlayer: String(playerTwoID),
        screen: Screens.EnterUnits,
      };
    }
  }

  return state;
}

interface FightsFirstState {
  units:
    | {}
    | {
        [id: number]: {
          name: string;
          id: number;
          fightsFirst: boolean;
          fightsLast: boolean;
        };
      };
  unitIDs: Array<Number>;
  players:
    | {}
    | {
        [id: string]: {
          name: string;
          units: Array<Number>;
        };
      };
  actingPlayer: null | string;
  opposingPlayer: null | string;
  screen: Screens;
}

function produceInitialState(): FightsFirstState {
  return {
    units: {},
    unitIDs: [],
    players: {},
    actingPlayer: null,
    opposingPlayer: null,
    screen: Screens.NamePlayers,
  };
}
