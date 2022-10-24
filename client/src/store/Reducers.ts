import { IContextNotes } from "../../types";
import { ACTIONS } from "./Actions";

type Action = {
  type: "ADD_NOTES" | "ADD_USERS" | "FILTER" | "FILTERS";
  payload: [];
};

const reducers = (state: IContextNotes, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTES:
      return {
        ...state,
        reviewnotes: action.payload,
      };
    case ACTIONS.ADD_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ACTIONS.FILTER:
      return {
        ...state,
        filteredData: action.payload,
      };
    case ACTIONS.FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
