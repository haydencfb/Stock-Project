// React Hook Imports

// React Component Imports
// import LoginCard from "../../components/login-comp-folder/LoginCard";
import SignUpCard from "../../components/signup-com-folder/SignUp";

// MUI Material Imports
import Box from "@mui/material/Box";

// CSS Imports

const SignupPage = () => {
    return (
        <>
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}>
                <SignUpCard />
            </Box>
        </>
    )
}

export default SignupPage;