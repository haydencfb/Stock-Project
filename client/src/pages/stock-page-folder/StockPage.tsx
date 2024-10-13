// Import React Hooks
// NA

// Import CSS Hooks
import "./stockpage.module.css";

// Import MUI Material Hooks
import Box from "@mui/material/Box";

// Import MUI Icon Hooks
// NA

// Import ChartJS Hooks
// NA

// Import Component Hooks
import StockCard from "../../components/card-comp-folder/StockCard";

const StockPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <StockCard />
      </Box>
    </>
  );
};

export default StockPage;
