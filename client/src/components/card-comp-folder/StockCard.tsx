// React Hook Imports

// MUI Material Imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// CSS Imports
import classes from './stockcard.module.css';

const StockCard = () => {

    const stockCardTheme = createTheme({
        palette: {
            primary: {
                main: '#000000'
            },
            secondary: {
                main: '#6D696A'
            },
            success: {
                main: '#26A96C'
            }, 
            info: {
                main: '#EAEAEA'
            }
        },

        breakpoints: { 
            values: { 
                xs: 0,
                sm: 362,
                md: 768,
                lg: 1024,
                xl: 1440
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={stockCardTheme}>
                <Grid size={{ sm: 12, md: 6, lg: 4 }} >
                    <Card 
                    sx={{ 
                        minWidth: 300,
                        margin: '15px',
                        backgroundColor: 'var(--primary-grey)'
                    }}
                    >
                        <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}> 
                            <Typography gutterBottom variant="h5" component="div">
                                Stock Name
                            </Typography>
                            <CardMedia
                                component="img"
                                height="140px"
                                image="https://placedog.net/500"
                                alt="random"
                                sx={{ mb: 2 }}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                Stock Value
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Stock Description
                            </Typography>
                        </CardContent>

                        <CardActions
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Button size="small">Learn More</Button>
                        </CardActions>

                    </Card>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default StockCard;