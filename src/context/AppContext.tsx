import { createContext } from "react";

const LoginContext = createContext({
  isLogged: false,
  setIsLogged: () => {},
});

const EmployeeContext = createContext({
  emp: [],
  setEmp: () => {},
});

export { LoginContext, EmployeeContext };
