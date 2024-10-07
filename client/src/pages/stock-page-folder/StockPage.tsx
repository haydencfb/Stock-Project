// React Component Imports
import StockCard from "../../components/card-comp-folder/StockCard";
import Box from "@mui/material/Box";

// React CSS Imports
import "./stockpage.module.css";

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
