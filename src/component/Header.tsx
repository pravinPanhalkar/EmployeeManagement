import { ExitToApp } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useLoginContext } from "../context/useContext";

const Header = () => {
  const { setIsLogged } = useLoginContext();
  const logout = (e) => {
    setIsLogged(false);
  };
  return (
    <div>
      <AppBar position="static">
        <div className="header">
          <Toolbar variant="dense">EMS</Toolbar>
          <IconButton
            aria-label="exit"
            color="success"
            onClick={logout}
            className="logout"
            size="large"
          >
            <ExitToApp />
          </IconButton>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
