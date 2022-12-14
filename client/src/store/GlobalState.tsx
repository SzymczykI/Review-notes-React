import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { IContextNotes } from "../../types";
import { fetchData } from "../utils/fetchData";
import reducers from "./Reducers";

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<{
  state: IContextNotes;
  dispatch: Dispatch<any>;
}>({
  state: {
    reviewnotes: [],
    users: [],
    filteredData: [],
  },
  dispatch: () => null,
});

export const DataProvider = ({ children }: DataProviderProps) => {
  const initialState: IContextNotes = {
    reviewnotes: [],
    users: [],
    filteredData: [],
  };
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    fetchData("users")
    .then((res) => {
      dispatch({
        type: "ADD_USERS",
        payload: res,
      });
    })
    .catch((err) => console.log(err));  
    
    fetchData("reviewnotes")
      .then((res) => {
        dispatch({
          type: "ADD_NOTES",
          payload: res,
        });
        dispatch({
          type: "FILTER",
          payload: res,
        });
      })
      .catch((err) => console.log(err));
   

  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
