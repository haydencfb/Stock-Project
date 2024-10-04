// React Hook Imports

// React Component Imports

// MUI Material Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// CSS Imports
import classes from '../Error Page Folder/error.module.css';

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