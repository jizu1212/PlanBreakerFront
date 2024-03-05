import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useLocation, useNavigate } from "react-router-dom";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
export default function Footer() {
  const [value, setValue] = React.useState("/calendar"); // Default route
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    // Set the navigation state based on the current path
    setValue(location.pathname);
  }, [location]);
  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}
        sx={{
          justifyContent: "space-evenly",
        }}
      >
        <BottomNavigationAction
          label="Profile"
          value="/profile"
          icon={<SentimentSatisfiedAltIcon />}
          sx={{
            border: "1px solid gray",
            maxWidth: "none",
          }}
        />
        <BottomNavigationAction
          label="Calendar"
          value="/calendar"
          icon={<CalendarTodayIcon />}
          sx={{
            border: "1px solid gray",
            maxWidth: "none",
          }}
        />
        <BottomNavigationAction
          label="Projects"
          value="/projects"
          icon={<SplitscreenIcon />}
          sx={{
            border: "1px solid gray",
            maxWidth: "none",
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
