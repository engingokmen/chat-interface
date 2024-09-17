import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { Combobox, Direction, IState } from "../types";

const initialValue = {
  messages: [
    { direction: Direction.Received, value: "Received" },
    { direction: Direction.Sent, value: "Sent" },
  ],
  input: "",
  comboboxItems: [],
  combobox: Combobox.null,
};

const AppContext = createContext<IState>(initialValue);
const AppDispatchContext = createContext<React.Dispatch<any>>(() => {});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [value, dispatch] = useReducer(reducer, initialValue);

  return (
    <AppContext.Provider value={value}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "CHANGE_INPUT":
      return { ...state, input: action.payload };
    case "RESET_INPUT":
      return { ...state, input: "" };
    case "SET_COMBOBOX_ITEMS":
      return { ...state, comboboxItems: action.payload };
    case "SET_COMBOBOX":
      return { ...state, combobox: action.payload };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const useAppData = () => useContext(AppContext);
export const useAppDipatch = () => useContext(AppDispatchContext);

export const changeInput = (value: string) => ({
  type: "CHANGE_INPUT",
  payload: value,
});

export const resetInput = () => ({
  type: "RESET_INPUT",
});

export const addMessage = (value: string) => ({
  type: "ADD_MESSAGE",
  payload: { direction: Direction.Sent, value },
});
