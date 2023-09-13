import Header from "./Header";
import Drawer from "./Drawer";
import RouteConfig from "./RouteConfig";
import { useEmployeeContext, useLoginContext } from "../context/useContext";
import Login from "../pages/Login/Login";
import { useEffect } from "react";
import { BASE_URL } from "../Utils/constant";

const AppLayout = () => {
  const { isLogged } = useLoginContext();
  const { setEmp } = useEmployeeContext();

  const getEmpData = async () => {
    await fetch(BASE_URL + "/employee")
      .then((resp) => resp.json())
      .then((result) => {
        setEmp(result);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getEmpData();
    console.log(isLogged);
  }, []);

  return (
    <>
      {isLogged ? (
        <div className="emp_cont">
          <Header />
          <main className="main">
            <div className="main__drawer">
              <Drawer />
            </div>
            <div className="main__content">
              <RouteConfig />
            </div>
          </main>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default AppLayout;
