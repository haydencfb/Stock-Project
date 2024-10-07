// React Hook Imports

// React Component Imports
import LoginCard from "../../components/login-comp-folder/LoginCard";
import SignUpCard from "../../components/signup-com-folder/SignUp";

// MUI Material Imports
import Box from "@mui/material/Box";

// CSS Imports

const LandingPage = () => {
    return (
        <>
        <Box
      sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
      }}>
        <LoginCard />
      </Box>
            {/* <LoginCard /> */}
            {/* <SignUpCard /> */}
        </>
    )
}

export default LandingPage;