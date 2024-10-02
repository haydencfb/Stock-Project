import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const StockCard = () => {

    const stockCardTheme = createTheme({
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
            <Grid size={{ sm: 12, md: 12, lg: 12 }}>
            <Card sx={{ 
                maxWidth: 345,
                margin: '15px'
                }}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Stock Name
                </Typography>
                <CardMedia
                    component="img"
                    height="140"
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
                <CardActions>
                <Button size="small">Save/Add</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </Grid>
            </ThemeProvider>
        </>
    )
}

export default StockCard;