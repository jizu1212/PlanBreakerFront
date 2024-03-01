import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
export default function Footer() {
  const [value, setValue] = React.useState(1);
  const navigate = useNavigate();

  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "70px", // Adjust the height as needed
          width: "100%",
        }}
      >
        <BottomNavigationAction
          label="Profile"
          icon={<SentimentSatisfiedAltIcon />}
          onClick={() => navigate("/profile")}
          sx={{
            border: "1px solid gray",
            padding: "0",
            maxWidth: "none",
          }}
        />
        <BottomNavigationAction
          label="Calendar"
          icon={<CalendarTodayIcon />}
          onClick={() => navigate("/calendar")}
          sx={{
            border: "1px solid gray",
            padding: "0",
            maxWidth: "none",
          }}
        />
        <BottomNavigationAction
          label="Projects"
          icon={<SplitscreenIcon />}
          onClick={() => navigate("/projects")}
          sx={{
            border: "1px solid gray",
            padding: "0",
            maxWidth: "none",
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
