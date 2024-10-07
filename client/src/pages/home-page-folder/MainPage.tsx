// React Hook Imports
import React from "react";

// React Component Imports
import StockCard from "../../components/card-comp-folder/StockCard.tsx";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import SearchBar from "../../components/search-comp-folder/SearchBar.tsx";

const data = [
    { name: "test1" },
    { name: "test2" },
    { name: "test3" }
];

const MainPage = () => {
    return (
        <>
            <SearchBar />
            <Box sx={{ flex: 1, minHeight: "70vh" }}> 
                <Grid container spacing={2} justifyContent="center" alignItems="center"> {/* Grid2 container */}
                    {data.map((stock, index) => (
                            <StockCard />
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default MainPage;