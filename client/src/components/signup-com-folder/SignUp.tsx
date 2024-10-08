// React Hook Imports

// MUI Material Imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// CSS Imports
import classes from './signup.module.css';

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

const SignUpCard = () => {
    return (
        <>
            <ThemeProvider theme={colorTheme}>
                <div className={`${classes.signupDiv}`}>
                    <Box className={`${classes.signupBox}`}>
                        <Grid container spacing={2}>

                            <Grid size={12} display='flex' justifyContent='center'>
                                <TextField fullWidth label="Username" style={{ maxWidth: 500 }}></TextField>
                            </Grid>

                            <Grid size={12} display='flex' justifyContent='center'>
                                <TextField fullWidth label="Password" style={{ maxWidth: 500 }}></TextField>
                            </Grid>

                            <Grid size={12} display='flex' justifyContent='center'>
                                <TextField fullWidth label="Confirm Password" style={{ maxWidth: 500 }}></TextField>
                            </Grid>

                            <Grid size={12} display='flex' justifyContent='center' alignItems='center'>
                                <Button variant='contained' color='primary' className={`${classes.signupButton}`}>Create Account</Button>
                            </Grid>

                        </Grid>
                    </Box>
                </div>
            </ThemeProvider>
        </>
    )
}

export default SignUpCard;