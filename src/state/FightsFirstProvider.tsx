import {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react";

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
  action: { type: string }
): FightsFirstState {
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
}
type ActionTypes = { type: string };

function produceInitialState(): FightsFirstState {
  return {
    units: {},
    unitIDs: [],
    players: {},
    actingPlayer: null,
    opposingPlayer: null,
  };
}
