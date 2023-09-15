import { Routes, Route } from "react-router-dom";
import NoFound from "../pages/Notfound/NoFound";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "@mui/icons-material";
import EmpList from "../pages/EmployeeList/EmpList";

export const RouteConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="//list" element={<EmpList />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </>
  );
};
