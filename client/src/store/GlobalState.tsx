import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { data, IContextNotes } from "../../types";
import { fetchData } from "../utils/fechData";
import reducers from "./Reducers";

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<{
  state: {
    data: data[];
  };
  dispatch: Dispatch<any>;
}>({
  state: {
    data: [],
  },
  dispatch: () => null,
});

export const DataProvider = ({ children }: DataProviderProps) => {
  const initialState: IContextNotes = { data: [] };
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    fetchData().then((res) => {
      if (res.err) return res.err;
      dispatch({
        type: "ADD",
        payload: res,
      });
    });
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
