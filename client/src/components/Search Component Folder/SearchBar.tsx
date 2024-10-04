// React Hook Imports
import * as React from 'react';

// MUI Material Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// CSS Imports

const SearchBar = () => {

    const searchTheme = createTheme({
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
            <ThemeProvider theme={searchTheme}>
            <Grid container direction="row" spacing={2}>
                <Grid size={12} display='flex' justifyContent='center'>
                    <Box sx={{ width: '750px', maxWidth: '100%', margin: '15px', marginTop: 15}}>
                        <TextField fullWidth label="Search" id="fullWidth" />
                    </Box>
                </Grid>    
            </Grid>
            </ThemeProvider>
        </>
    )
}

export default SearchBar;