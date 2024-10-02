// React Component Imports
import StockCard from "../../components/Stock Card Folder/StockCard";
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
      <StockCard />
      </Box>
    </>
  );
};

export default StockPage;
