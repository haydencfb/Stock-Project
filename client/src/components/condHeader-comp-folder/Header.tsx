import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AppBar from '@mui/material/AppBar';

const Header = () => {
    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: `var(--primary-grey)`, height: `auto`, filter: 'drop-shadow(0px 5px 5px var(--primary-grey))' }} >
            <Grid container>
                <Grid 
                size={12} 
                display='flex'
                justifyContent='center'
                alignItems='center'
                >
                    <ShowChartIcon fontSize='large' />
                    <Typography 
                    sx={{
                        fontSize: 'clamp(1.75rem, 2.5vw, 3.5rem)',
                        margin: '15px',
                        color: 'var(--primary-white)',
                    }}
                    >
                        Stock Tracker
                    </Typography>
                </Grid>
            </Grid>
            </AppBar>
        </>
    )
}

export default Header;