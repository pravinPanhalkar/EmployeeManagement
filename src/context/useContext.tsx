import { useContext } from "react";
import { EmployeeContext, LoginContext } from "./AppContext";

const useLoginContext = () => {
  return useContext(LoginContext);
};

const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};

export { useLoginContext, useEmployeeContext };
