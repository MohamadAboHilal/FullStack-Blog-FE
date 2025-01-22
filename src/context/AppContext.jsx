import React, { createContext, useContext } from "react";

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  // Provide state and actions to the rest of the app
  const somevalue = "some value";
  return (
    <AppContext.Provider value={somevalue}>{children}</AppContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
