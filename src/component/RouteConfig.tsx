import { Routes, Route } from "react-router-dom";
import NoFound from "../pages/Notfound/NoFound";
import { routeList } from "../Utils/constant";
import { Login } from "../pages/Login/Login";

export const RouteConfig = () => {
  return (
    <>
      <Routes>
        {routeList.map((item) => {
          return (
            <Route path={item.path} element={item.component} key={item.id} />
          );
        })}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </>
  );
};
