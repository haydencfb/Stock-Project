// Import React Hooks
// import * as React from "react";
import { Link } from "react-router-dom";

// Import CSS Hooks
import classes from "./footer.module.css";

// Import MUI Material Hooks
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

// Import MUI Icon Hooks
import GitHubIcon from "@mui/icons-material/GitHub";
import SlideshowIcon from "@mui/icons-material/Slideshow";

// Import ChartJS Hooks
// NA

// Import Component Hooks
// NA

export default function Footer() {
  return (
    <footer>
      <Box sx={{ height: "50px", width: "100%", marginTop: "auto" }}>
        <BottomNavigation
          sx={{
            height: "50px",
            width: "100%",
            backgroundColor: "var(--primary-grey)",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            to="https://github.com/haydencfb/Stock-Project"
            className={`${classes.footerLink}`}
          >
            <GitHubIcon fontSize="large" />
          </Link>

          <Link
            to="https://github.com/haydencfb/Stock-Project"
            className={`${classes.footerLink}`}
          >
            <SlideshowIcon fontSize="large" />
          </Link>
        </BottomNavigation>
      </Box>
    </footer>
  );
}
