import React from "react";
import { Screens, useFightsFirst } from "../state/FightsFirstProvider";
import NamePlayers from "./NamePlayers";

export default function FightsFirst() {
  const state = useFightsFirst();

  switch (state.screen) {
    case Screens.NamePlayers: {
      return <NamePlayers />;
    }
    case Screens.SelectActivePlayer: {
      return <div>Select Active Player</div>;
    }
    case Screens.EnterUnits: {
      return <div>Enter Units</div>;
    }
    default: {
      return <div>Name Players</div>;
    }
  }
}
