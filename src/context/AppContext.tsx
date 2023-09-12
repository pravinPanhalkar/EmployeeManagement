import { createContext } from "react";

const LoginContext = createContext({
  isLogged: false,
  setIsLogged: (isLogged: Boolean) => {},
});

const EmployeeContext = createContext({
  emp: [],
  setEmp: () => {},
  setAllEmp: () => {},
});

export { LoginContext, EmployeeContext };
