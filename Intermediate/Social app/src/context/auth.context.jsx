import { createContext, useEffect, useState } from "react";

export const auth = createContext(null);

export default function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(localStorage.getItem("token"));
    }
  }, []);

  return (
    <auth.Provider value={{ isLogin, setIsLogin }}>{children}</auth.Provider>
  );
}
