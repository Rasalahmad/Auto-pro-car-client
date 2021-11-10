import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/explore'>
                        <Button color="inherit">Explore</Button>
                    </NavLink>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        AUTOPRO
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/home'>
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/services'>
                        <Button color="inherit">Services</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/technology'>
                        <Button color="inherit">Technology</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/review'>
                        <Button color="inherit">Reviews</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/dashboard'>
                        <Button color="inherit">Dashboard</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/login'>
                        <Button color="inherit">Login</Button>
                    </NavLink>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;