import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { Combobox, Direction, IState } from "../types";

const initialValue = {
  messages: [
    { direction: Direction.Received, value: "Received" },
    { direction: Direction.Sent, value: "Sent" },
  ],
  input: "",
  selectOptions: [
    "Combobox message 1",
    "Combobox message 2",
    "Combobox message 3",
    "Combobox message 4",
    "Combobox message 5",
  ],
  autoSuggestions: [
    "Hello!",
    "How are you?",
    "What's up?",
    "Thank you!",
    "You're welcome.",
    "Please.",
    "Sorry.",
    "No problem.",
    "Goodbye!",
    "See you later.",
    "Take care.",
    "Have a great day!",
    "Yes.",
    "No.",
    "Maybe.",
    "I don't know.",
    "Can you help me?",
    "Sure!",
    "Absolutely.",
    "Let's do it!",
  ],
  combobox: Combobox.null,
  image: "",
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
      let payload;
      if (action.payload.value.startsWith("/image")) {
        payload = { ...action.payload, value: state.image };
      } else {
        payload = { ...action.payload };
      }
      return { ...state, messages: [...state.messages, payload] };
    case "CHANGE_INPUT":
      return { ...state, input: action.payload };
    case "SET_COMBOBOX":
      return { ...state, combobox: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
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

export const setCombobox = (value: Combobox) => ({
  type: "SET_COMBOBOX",
  payload: value,
});

export const setImage = (value: string) => ({
  type: "SET_IMAGE",
  payload: value,
});
