import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link } from "react-router-dom";
import { routeList } from "../Utils/constant";

export const Drawer = () => {
  return (
    <div>
      <MenuList>
        {routeList.map((item) => {
          return (
            <MenuItem key={item.id}>
              <ListItemIcon>{item.drawerIcon}</ListItemIcon>
              <ListItemText>
                <Link to={item.path}>{item.name}</Link>
              </ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </div>
  );
};
