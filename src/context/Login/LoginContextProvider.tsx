import { useState } from "react";
import { LoginContext } from "../AppContext";

export const LoginContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
};
