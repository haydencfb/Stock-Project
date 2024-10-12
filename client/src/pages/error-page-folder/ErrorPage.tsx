// Import React Hooks
// NA

// Import CSS Hooks
import classes from "./error.module.css";

// Import MUI Material Hooks
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Import MUI Icon Hooks
// NA

// Import ChartJS Hooks
// NA

// Import Component Hooks
// NA

const ErrorPage = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h1"
          display="flex"
          justifyContent="center"
          className={`${classes.error}`}
        >
          This is an Error
        </Typography>
        <Typography
          variant="h1"
          display="flex"
          justifyContent="center"
          className={`${classes.error}`}
        >
          ¯\_(ツ)_/¯
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
