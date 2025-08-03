import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedIn] = useState(
    localStorage.getItem("isloggedIn") === "true"
  );
  useEffect(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    if (storedValue) {
      setIsLoggedIn(storedValue === "true");
    }
  }, []);
  const logOut = async () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };
  const logIn = async () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider value={{ isLoggedin, setIsLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
