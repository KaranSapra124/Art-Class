import React, { createContext, useReducer, useContext } from "react";
import { userReducer, initialState } from "./UserReducer";

// Create UserContext
const UserContext = createContext();

// Custom hook to access the context
export const useUser = () => useContext(UserContext);

// UserProvider to wrap the app
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
