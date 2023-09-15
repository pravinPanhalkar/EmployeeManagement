import { ExitToApp } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useLoginContext } from "../context/useContext";
import Box from "@mui/material/Box";

export const Header = () => {
  const { setIsLogged } = useLoginContext();
  const logout = () => {
    setIsLogged(false);
  };
  return (
    <Box>
      <AppBar position="static">
        <Box className="header">
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
        </Box>
      </AppBar>
    </Box>
  );
};
