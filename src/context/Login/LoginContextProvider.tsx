import { useState } from "react";
import { LoginContext } from "../AppContext";

export const LoginContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogged, setIsLogged] = useState(null);
  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
};
