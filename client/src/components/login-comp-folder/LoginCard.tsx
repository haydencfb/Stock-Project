// React Hook Imports
import { Link } from 'react-router-dom';
import { useState, type FormEvent, type ChangeEvent } from 'react';

import Auth from '../../utils/auth';
import { login } from '../../api/authAPI';
import type { UserLogin } from '../../interfaces/UserLogin';

// MUI Material Imports
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// CSS Imports
import classes from './login.module.css';

const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#6D696A'
        },
        success: {
            main: '#26A96C'
        }
    }
})

const LoginCard = () => {

    const [loginData, setLoginData] = useState<UserLogin>({
        username: '',
        password: '',
    });
    
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data = await login(loginData);
            Auth.login(data.token);
        } catch (err) {
            console.error('Failed to login', err);
        }
    };

    return (
        <>
            <ThemeProvider theme={colorTheme}>
                <div className={`${classes.loginDiv}`}>
                    <Box className={`${classes.loginBox}`}>
                        <Grid container spacing={2}>

                            <form onSubmit={handleSubmit}>

                                <Grid size={12} display='flex' justifyContent='center'>
                                    <input
                                        className={`${classes.inputField}`}
                                        type='text'
                                        name='username'
                                        placeholder='Username'
                                        value={loginData.username || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid size={12} display='flex' justifyContent='center'>
                                    {/* <label>Password</label> */}
                                    <input
                                        className={`${classes.inputField}`}
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='Password'
                                        value={loginData.password || ''}
                                        onChange={handleChange}
                                    />                                
                                </Grid>

                                {/* <Grid size={12} display='flex' justifyContent='center' alignItems='center'>
                                    <Typography>Have you signed up yet?</Typography>
                                    <Link to="/SignupPage" relative='path' style={{ textDecoration: 'none', paddingLeft: '5px', color: 'var(--primary-green)' }}>Sign Up Now!</Link>
                                </Grid> */}

                                <Grid size={12} display='flex' justifyContent='center' alignItems='center' sx={{ marginTop: '50px' }}>
                                    <Button type='submit' variant='contained' className={`${classes.loginButton}`}>Sign In</Button>
                                </Grid>

                            </form>

                        </Grid>
                    </Box>
                </div>
            </ThemeProvider>
        </>
    )
}

export default LoginCard;