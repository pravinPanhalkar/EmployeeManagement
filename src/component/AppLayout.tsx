import Header from "./Header";
import Drawer from "./Drawer";
import RouteConfig from "./RouteConfig";
import { useLoginContext } from "../context/useContext";
import Login from "../pages/Login/Login";
import { useEffect } from "react";
// import getData from "../api/empApi.js";

const AppLayout = () => {
  const { isLogged } = useLoginContext();

  const getdata = async () => {
    await fetch("http://localhost:3030/posts").then((resp) => {
      console.log(resp.json());
    });
  };

  useEffect(() => {
    getdata();
  });
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
