import { useState } from "react";
import { EmployeeContext } from "../AppContext";

export const EmployeeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [emp, setEmp] = useState(true);
  return (
    <EmployeeContext.Provider value={{ emp, setEmp }}>
      {children}
    </EmployeeContext.Provider>
  );
};
