import React, { createContext, ReactNode, useContext, useReducer } from "react";

const AppContext = createContext<IState>({ messages: [] });
const AppDispatchContext = createContext<React.Dispatch<any>>(() => {});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [value, dispatch] = useReducer(reducer, {
    messages: ["initial message"],
  });

  return (
    <AppContext.Provider value={value}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const useAppData = () => useContext(AppContext);
export const useAppDipatch = () => useContext(AppDispatchContext);
