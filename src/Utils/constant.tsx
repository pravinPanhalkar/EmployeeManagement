import Dashboard from "../pages/Dashboard/Dashboard";
import EmpList from "../pages/EmployeeList/EmpList";
import { AutoAwesomeMosaic, ListAlt } from "@mui/icons-material";

export const routeList = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    component: <Dashboard />,
    drawerIcon: <AutoAwesomeMosaic fontSize="large" />,
  },
  {
    id: 2,
    name: "Employee List",
    path: "/list",
    component: <EmpList />,
    drawerIcon: <ListAlt fontSize="large" />,
  },
];
