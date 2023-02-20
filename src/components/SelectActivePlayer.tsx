import { 
  useFightsFirstDispatch,
  useFightsFirst
} from "../state/FightsFirstProvider";

export default function SelectActivePlayer() {
  const dispatch = useFightsFirstDispatch();
  const state = useFightsFirst();

  // p1 callback
  // p2 callback
  // callbacos get details from state and map into player functions 

  // render "who is next" div
  return <div>SAP</div>
}