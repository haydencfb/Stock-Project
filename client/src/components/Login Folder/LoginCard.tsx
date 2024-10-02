import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

const LoginCard = () => {
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

                <Grid size={6} display='flex' justifyContent='end' alignItems='center'>
                    <Typography>
                        Have you signed up yet?
                    </Typography>
                </Grid>

                <Grid size={6} display='flex' justifyContent='start' alignItems='center'>
                    <Button>Sign Up Now!</Button>
                </Grid>
            </Grid>
            </Box>
        </>
    )
}

export default LoginCard;