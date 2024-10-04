// React Hook Imports

// React Component Imports
import StockCard from "../../components/Stock Card Component Folder/StockCard";
import SearchBar from "../../components/Search Component Folder/SearchBar";

// MUI Material Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

// CSS Imports

const MainPage = () => {

    return (
        <>
            <SearchBar />
                <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    flex: 1,
                }}
                >
                    <StockCard />
                    <StockCard />
                    <StockCard />
                </Grid>
        </>
    )
}

export default MainPage;