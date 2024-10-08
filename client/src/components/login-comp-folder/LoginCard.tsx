// React Hook Imports
import { Link } from 'react-router-dom';
import SignUpCard from '../signup-com-folder/SignUp';
import { useState } from 'react';

// MUI Material Imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// CSS Imports
import classes from './login.module.css';

const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#6D696A'
        },
        success: {
            main: '#26A96C'
        }
    }
})

const LoginCard = () => {

    return (
        <>
            <ThemeProvider theme={colorTheme}>
                <div className={`${classes.loginDiv}`}>
                    <Box className={`${classes.loginBox}`}>
                        <Grid container spacing={2}>

                            <Grid size={12} display='flex' justifyContent='center'>
                                <TextField fullWidth label="Username" style={{ maxWidth: 500 }}></TextField>
                            </Grid>

                            <Grid size={12} display='flex' justifyContent='center'>
                                <TextField fullWidth label="Password" style={{ maxWidth: 500 }}></TextField>
                            </Grid>

                            <Grid size={12} display='flex' justifyContent='center' alignItems='center'>
                                <Typography>Have you signed up yet?</Typography>
                                <Link to="/SignupPage" relative='path' style={{ textDecoration: 'none', paddingLeft: '5px', color: 'var(--primary-green)' }}>Sign Up Now!</Link>
                            </Grid>

                            <Grid size={12} display='flex' justifyContent='center' alignItems='center'>
                                <Button variant='contained' className={`${classes.loginButton}`}>Sign In</Button>
                            </Grid>

                        </Grid>
                    </Box>
                </div>
            </ThemeProvider>
        </>
    )
}

export default LoginCard;