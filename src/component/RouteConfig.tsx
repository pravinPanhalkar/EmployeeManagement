import { Routes, Route } from "react-router-dom";
import NoFound from "../pages/Notfound/NoFound";
import { Login } from "../pages/Login/Login";
import EmpList from "../pages/EmployeeList/EmpList";
import { Dashboard } from "../pages/Dashboard/Dashboard";

export const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<EmpList />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </>
  );
};
