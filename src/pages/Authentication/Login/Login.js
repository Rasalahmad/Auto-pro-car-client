import React, {useState} from 'react';
import {TextField, Container, Grid, Typography, Button, CircularProgress, Alert} from '@mui/material';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const [loginData, setLoginData] = useState([])
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useFirebase();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt: 8}}>
                    <Typography variant="h3">
                        Login
                    </Typography>
                    {isLoading ? <CircularProgress />:
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            type="email"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" />
                            <Button 
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit"
                            >Login</Button>
                            <NavLink
                            style={{textDecoration: 'none'}}
                             to='/register'>
                                <Button variant='text'>New User? Please Register</Button>
                            </NavLink>
                    </form>}
                    <p>-----------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>
                    {user?.email && <Alert severity="success">Login Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={4} sx={{mt: '100px'}}>
                    <img style={{width : '100%'}} src="https://image.freepik.com/free-vector/vehicle-sale-concept-illustration_114360-7586.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;