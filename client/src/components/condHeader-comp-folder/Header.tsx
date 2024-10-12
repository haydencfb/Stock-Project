// Import React Hooks
// NA

// Import CSS Hooks
// NA

// Import MUI Material Hooks
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

// Import MUI Icon Hooks
import ShowChartIcon from "@mui/icons-material/ShowChart";

// Import ChartJS Hooks
// NA

// Import Component Hooks
// NA

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: `var(--primary-grey)`,
          height: `auto`,
          filter: "drop-shadow(0px 5px 5px var(--primary-grey))",
        }}
      >
        <Grid container>
          <Grid
            size={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ShowChartIcon fontSize="large" />
            <Typography
              sx={{
                fontSize: "clamp(1.75rem, 2.5vw, 3.5rem)",
                margin: "15px",
                color: "var(--primary-white)",
              }}
            >
              Stock Tracker
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
