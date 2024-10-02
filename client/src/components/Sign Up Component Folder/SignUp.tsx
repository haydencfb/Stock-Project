// React Hook Imports

// MUI Material Imports
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

// CSS Imports

const SignUpCard = () => {
    return (
        <>
            <Box 
            style={{
                border: '1px solid red',
                margin: '5px',
                padding: '25px',
                display: 'flex',
                justifyContent: 'center'
            }}
            >
            <Grid container spacing={2}>
                <Grid size={12} display='flex' justifyContent='center'>
                    <TextField fullWidth label="Username" style={{ width: 500 }}></TextField>
                </Grid>

                <Grid size={12} display='flex' justifyContent='center'>
                    <TextField fullWidth label="Password" style={{ width: 500 }}></TextField>
                </Grid>

                <Grid size={12} display='flex' justifyContent='center'>
                    <TextField fullWidth label="Confirm Password" style={{ width: 500 }}></TextField>
                </Grid>

                <Grid size={12} display='flex' justifyContent='center' alignItems='center'>
                    <Button>Create Account</Button>
                </Grid>
            </Grid>
            </Box>
        </>
    )
}

export default SignUpCard;