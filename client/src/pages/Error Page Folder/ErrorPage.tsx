import classes from '../Error Page Folder/error.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ErrorPage = () => {
    return (
        <>
            <Box>
                <Typography variant='h1' display='flex' justifyContent='center' className={`${classes.error}`}>
                    This is an Error
                </Typography>
                <Typography variant='h1' display='flex' justifyContent='center' className={`${classes.error}`}>
                    ¯\_(ツ)_/¯
                </Typography>
            </Box>
        </>
    )
}

export default ErrorPage;