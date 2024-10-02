import StockCard from "../../components/Stock Card Folder/StockCard";
import SearchBar from "../../components/Search Folder/SearchBar";
import Box from "@mui/material/Box";

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