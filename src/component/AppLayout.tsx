/**
 * Component : AppLayout
 * Description : Responsible for the layout and routing the application and handles rendering 
 * based on the login status and ensure that employee data is fetched

 */

import { Header } from "./Header";
import { Drawer } from "./Drawer";
import { RouteConfig } from "./RouteConfig";
import { useEmployeeContext, useLoginContext } from "../context/useContext";
import { Login } from "../pages/Login/Login";
import { useEffect } from "react";
import { BASE_URL } from "../Utils/constant";
import { Box } from "@mui/material";

export const AppLayout = () => {
  const { isLogged } = useLoginContext();
  const { setEmp } = useEmployeeContext();

  /**
   * @description - get employee data from backend and update the context
   */
  const getEmpData = async () => {
    try {
      const resp = await fetch(BASE_URL + "/employee");
      const result = await resp.json();
      setEmp(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEmpData();
  }, []);

  return (
    <>
      {isLogged ? (
        <Box className="emp_cont">
          <Header />
          <main className="main">
            <Box className="main__drawer">
              <Drawer />
            </Box>
            <Box className="main__content">
              <RouteConfig />
            </Box>
          </main>
        </Box>
      ) : (
        <Login />
      )}
    </>
  );
};
