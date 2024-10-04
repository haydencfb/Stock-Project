// React Hook Imports

// React Component Imports
import StockCard from "../../components/Stock Card Component Folder/StockCard";
import SearchBar from "../../components/Search Component Folder/SearchBar";

// MUI Material Imports
import Box from "@mui/material/Box";

// CSS Imports

const MainPage = () => {

    return (
        <>
            <SearchBar />
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "75vh",
                }}
                >
                    <StockCard />
                    <StockCard />
                    <StockCard />
                </Box>
        </>
    )
}

export default MainPage;