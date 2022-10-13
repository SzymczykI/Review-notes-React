import { data, IContextNotes } from "../../types";
import { ACTIONS } from "./Actions";

type Action = { type: "ADD"; payload: [] } | { type: "FILTER"; payload: [] };

const reducers = (state: {
    data: data[]
} , action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        data: action.payload,
      };
    case ACTIONS.FILTER:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducers;
