import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link } from "react-router-dom";
import { routeList } from "../Utils/constant";
import Box from "@mui/material/Box";

export const Drawer = () => {
  return (
    <Box data-testid="menu" className="menu">
      <MenuList>
        {routeList.map((item) => {
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
