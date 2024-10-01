import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./stockpage.module.css";

const StockPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
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
      </Box>
    </>
  );
};

export default StockPage;
