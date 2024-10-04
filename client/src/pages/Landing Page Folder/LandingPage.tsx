// React Hook Imports

// React Component Imports
import LoginCard from "../../components/Login Component Folder/LoginCard";
import SignUpCard from "../../components/Sign Up Component Folder/SignUp";

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