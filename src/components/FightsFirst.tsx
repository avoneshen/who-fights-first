import React from "react";
import { Screens, useFightsFirst } from "../state/FightsFirstProvider";
import NamePlayers from "./NamePlayers";
import SelectActivePlayers from
"./SelectActivePlayers"

export default function FightsFirst() {
  const state = useFightsFirst();

  switch (state.screen) {
    case Screens.NamePlayers: {
      return <NamePlayers />;
    }
    case Screens.SelectActivePlayer: {
      return <SelectActivePlayers />;
    }
    case Screens.EnterUnits: {
      return <div>Enter Units</div>;
    }
    default: {
      return <div>Name Players</div>;
    }
  }
}
