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

import { useState, useEffect, useLayoutEffect } from "react";
// import { retrieveUsers } from "../../api/userAPI";
// import type { UserData } from "../../interfaces/UserData";
import auth from '../../utils/auth';


const currencies = [
        {
        value: 'USD',
        label: '$ (USD)',
        },
        {
        value: 'EUR',
        label: '€ (EUR)',
        },
        {
        value: 'BTC',
        label: '฿ (BTC)',
        },
        {
        value: 'JPY',
        label: '¥ (JPY)',
        },
    ];

const Nav = () => {

    // const [users, setUsers] = useState<UserData[]>([]);
    const [loginCheck, setLoginCheck] = useState(false);

    useEffect(() => {
        if (loginCheck) {
            // fetchUsers();
        }
    }, [loginCheck]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    // const fetchUsers = async () => {
    //     try {
    //         const data = await retrieveUsers();
    //         setUsers(data)
    //     } catch (err) {
    //         console.error('Failed to retrieve tickets:', err);
    //     }
    // }

    const isMobile = useMediaQuery(`(max-width: 426px)`)
    const isTablet = useMediaQuery(`(max-width: 768px)`)

    const navTheme = createTheme({
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
            <AppBar position="fixed" sx={{ backgroundColor: `var(--primary-grey)`, height: `auto`, filter: 'drop-shadow(0px 5px 5px var(--primary-grey))' }} >
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
                            {!loginCheck ? (
                                <>
                                    <MenuItem onClick={handleClose}></MenuItem>
                                </>
                            ) : (
                                <>
                                    <MenuItem onClick={handleClose}>Log Out</MenuItem>
                                </>                            )}
                            {/* <MenuItem onClick={handleClose}>Log Out</MenuItem> */}

                            <Divider />

                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
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
                            color: 'var(--primary-white)',
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

                            <MenuItem onClick={handleClose}>Log Out</MenuItem>

                            <Divider />

                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
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
                            color: 'var(--primary-white)',
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
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
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
                            color: 'var(--primary-white)',
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
                            variant='outlined'
                            color='info'
                            // focused
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