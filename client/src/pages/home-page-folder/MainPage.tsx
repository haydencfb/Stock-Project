// Import React Hooks
// import React from "react";

// Import CSS Hooks
// NA

// Import MUI Material Hooks
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

// Import MUI Icon Hooks
// NA

// Import ChartJS Hooks
// NA

// Import Component Hooks
import StockCard from "../../components/card-comp-folder/StockCard.tsx";
import SearchBar from "../../components/search-comp-folder/SearchBar.tsx";

// const data = [
//     { name: "test1" },
//     { name: "test2" },
//     { name: "test3" }
// ];

const MainPage = () => {
  return (
    <>
      <SearchBar />
      <Box sx={{ flex: 1, minHeight: "70vh" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {" "}
          {/* Grid2 container */}
          {/* {data.map((stock, index) => ( */}
          <StockCard />
          {/* ))} */}
        </Grid>
      </Box>
    </>
  );
};

export default MainPage;
