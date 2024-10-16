// Import React Hooks

// Import CSS Hooks
import classes from "./stockcard.module.css";

// Import MUI Material Hooks
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Import Component Hooks
// import Charts from "../chart-comp-folder/charts";

const StockCard = () => {
  const stockCardTheme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#6D696A",
      },
      success: {
        main: "#26A96C",
      },
      info: {
        main: "#EAEAEA",
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 362,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={stockCardTheme}>
        <Grid size={{ sm: 12, md: 12, lg: 12 }}>
          <Card
            sx={{
              minWidth: 300,
              margin: "15px",
              backgroundColor: "var(--primary-grey)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={`${classes.chartContainer}`}>
                <canvas id="stockChart" width="500px" height="400px"></canvas>
              </div>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Button className={`${classes.cardActions}`} size="small">
                Learn More
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default StockCard;
