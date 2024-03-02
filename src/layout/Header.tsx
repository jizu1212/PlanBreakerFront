import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import UserAvatar from "../components/presentational/auth/UserAvatar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const isLoggedIn = false;

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Box sx={{ pl: 2, pr: 2 }}>
        <Toolbar disableGutters sx={{ height: "64px" }}>
          <AdbIcon
            onClick={() => navigate("/")}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              cursor: "pointer",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            LOGO
          </Typography>

          <AdbIcon
            onClick={() => navigate("/")}
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              cursor: "pointer",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            LOGO
          </Typography>
          {isLoggedIn ? (
            <UserAvatar />
          ) : (
            <>
              <Button
                color="inherit"
                sx={{ textTransform: "none" }}
                onClick={() => navigate("/signIn")}
              >
                Sign In
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                sx={{ textTransform: "none" }}
                onClick={() => navigate("/signUp")}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
