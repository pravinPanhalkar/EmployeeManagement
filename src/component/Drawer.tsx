import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link } from "react-router-dom";
import { routeList } from "../Utils/constant";

const Drawer = () => {
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
      {/* <MenuList>
        <MenuItem>
          <ListItemIcon>
            <AutoAwesomeMosaic fontSize="large" />
          </ListItemIcon>
          <ListItemText>
            <Link to="/">Dashboard</Link>
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ListAlt fontSize="large" />
          </ListItemIcon>
          <ListItemText>
            <Link to="/list">Employee List</Link>
          </ListItemText>
        </MenuItem>
      </MenuList> */}
    </div>
  );
};

export default Drawer;
