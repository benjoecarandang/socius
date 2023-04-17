import { createContext, useContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  return <AuthContext.Provider value={{ theme: "black" }} {...props} />;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be wrapped around AuthContextProvider`);
  }
  return context;
};

export { AuthContextProvider, useAuth };
