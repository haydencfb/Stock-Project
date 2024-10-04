// React Hook Imports
import * as React from 'react';
import classes from './nav.module.css';

// MUI Material Imports
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// MUI Icon Imports
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const currencies = [
        {
        value: 'USD',
        label: '$',
        },
        {
        value: 'EUR',
        label: '€',
        },
        {
        value: 'BTC',
        label: '฿',
        },
        {
        value: 'JPY',
        label: '¥',
        },
    ];

const Nav = () => {

    const isMobile = useMediaQuery(`(max-width: 426px)`)
    const isTablet = useMediaQuery(`(max-width: 768px)`)

    const navTheme = createTheme({
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

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <> 
            {/* These will always be present, no matter page size */}
            <ThemeProvider theme={navTheme}>
            <AppBar position="fixed" sx={{ backgroundColor: `var(--primary-grey)`, height: `auto` }} >
            <Grid container direction="row" spacing={2} sx={{ display: 'flex' }}>

            {/* Mobile View */}
            {isMobile ? (
                <>
                    <Grid 
                    size={4}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        textAlign: 'start',
                        padding: '15px 0px',
                    }}
                    >
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{
                                color: 'var(--primary-white)',
                            }}
                        >
                            <AccountCircleIcon fontSize='large' />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Log In</MenuItem>
                            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                            <MenuItem onClick={handleClose}>Account Settings</MenuItem>

                            <Divider />

                            <MenuItem onClick={handleClose}>Currency 1</MenuItem>
                            <MenuItem onClick={handleClose}>Currency 2</MenuItem>
                            <MenuItem onClick={handleClose}>Currency 3</MenuItem>
                            <MenuItem onClick={handleClose}>Currency 4</MenuItem>
                            <MenuItem onClick={handleClose}>Currency 5</MenuItem>
                        </Menu>

                    </Grid>

                    <Grid 
                    size={8}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    >
                        <ShowChartIcon fontSize='large' />
                        <Typography 
                        sx={{
                            fontSize: 'clamp(1rem, 1.28rem, 2rem)',
                            margin: '25px',
                            color: 'white',
                            textAlign: 'center'
                        }}
                        >
                            Stock Tracker
                        </Typography>
                    </Grid>
                </>

            // Tablet View
            ) : isTablet ? (
                <>
                    <Grid 
                    size={4}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        textAlign: 'start',
                        padding: '15px 0px',
                    }}
                    >
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{
                                color: 'var(--primary-white)',
                            }}
                        >
                            <AccountCircleIcon fontSize='large' />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Log In</MenuItem>
                            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                            <MenuItem onClick={handleClose}>Account Settings</MenuItem>

                            <Divider />

                            <MenuItem onClick={handleClose}>Currency 1</MenuItem>
                            <MenuItem onClick={handleClose}>Currency 2</MenuItem>
                            <MenuItem onClick={handleClose}>Currency 3</MenuItem>
                            <MenuItem onClick={handleClose}>Currency 4</MenuItem>
                            <MenuItem onClick={handleClose}>Currency 5</MenuItem>
                        </Menu>

                    </Grid>

                    <Grid 
                    size={8}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    >
                        <ShowChartIcon fontSize='large' />
                        <Typography 
                        sx={{
                            fontSize: 'clamp(1rem, 1.28rem, 2rem)',
                            margin: '25px',
                            color: 'white',
                            textAlign: 'center'
                        }}
                        >
                            Stock Tracker
                        </Typography>
                    </Grid>
                </>
            
            // Desktop View
            ) : (
                <>
                    <Grid 
                        size={4}
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        sx={{
                            textAlign: 'end',
                            padding: '15px 0px',
                        }}
                    >
                        <Button
                            id="basic-button"
                            className={`${classes.button}`}
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{
                                color: 'var(--primary-white)',
                            }}
                        >
                            <AccountCircleIcon fontSize='large' />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Currency 1</MenuItem>
                        </Menu>

                    </Grid>
            
                    <Grid 
                    size={4} 
                    display='flex'
                    justifyContent='center'
                    alignItems='center'>
                        <ShowChartIcon fontSize='large' />
                        <Typography 
                        sx={{
                            fontSize: 'clamp(1.75rem, 2.5vw, 3.5rem)',
                            margin: '15px',
                            color: 'white',
                        }}
                        >
                            Stock Tracker
                        </Typography>
                    </Grid>

                    <Grid 
                    size={4}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        textAlign: 'start',
                        padding: '15px 0px',
                    }}
                    >
                        <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                        >
                            <TextField
                            id="filled-select-currency-native"
                            select
                            label="Select"
                            defaultValue="EUR"
                            // helperText="Please select your currency"
                            variant='outlined'
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                </>
            )}

            </Grid>
            </AppBar>
            </ThemeProvider>
        </>
    )
}

export default Nav;