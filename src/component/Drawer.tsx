import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { AutoAwesomeMosaic, ListAlt } from "@mui/icons-material";

const dataList = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    drawerIcon: <AutoAwesomeMosaic fontSize="large" />,
  },
  {
    id: 2,
    name: "Employee List",
    path: "/list",
    drawerIcon: <ListAlt fontSize="large" />,
  },
];

export const Drawer = () => {
  return (
    <Box data-testid="menu" className="menu">
      <MenuList>
        {dataList.map((item) => {
          return (
            <MenuItem key={item.id} className="menu__item">
              <ListItemIcon>{item.drawerIcon}</ListItemIcon>
              <ListItemText>
                <Link to={item.path}>{item.name}</Link>
              </ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </Box>
  );
};
