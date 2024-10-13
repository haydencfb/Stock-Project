// Import React Hooks
// NA

// Import CSS Hooks
// NA

// Import MUI Material Hooks
import Box from "@mui/material/Box";

// Import MUI Icon Hooks
// NA

// Import ChartJS Hooks
// NA

// Import Component Hooks
import LoginCard from "../../components/login-comp-folder/LoginCard";

const LandingPage = () => {
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
        <LoginCard />
      </Box>
    </>
  );
};

export default LandingPage;
