import { createContext, useReducer } from "react";

const initialState = {
  web3: null,
  contract: null,
  userID: null,
  address: null,
  isDPS: false,
  activity: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CONNECTION":
      const { web3, contract } = action.payload;
      return { ...state, web3, contract };
    case "SET_LOGIN":
      const { userID, address, isDPS } = action.payload;
      return { ...state, userID, address, isDPS };
    case "SET_LOGOUT":
      return { ...state, userID: null, address: null, isDPS: false };
    case "SET_ACTIVITY":
      return { ...state, activity: state.activity + 1 };
    default:
      return state;
  }
}

export const AppContext = createContext();

export function AppProvider({ children }) {
  const value = useReducer(reducer, initialState);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
