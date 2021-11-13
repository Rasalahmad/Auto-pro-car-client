import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useFirebase from '../../hooks/useFirebase';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



export default function Navbar() {
    const { user, logOut } = useFirebase();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        }
    });
    const { navItem, navIcon, navItemContainer, navLogo } = useStyle();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link to="/home">Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link to="/services">Services</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link to="/technology">Technology</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link to="/reviews">Reviews</Link>
                    </ListItemText>
                </ListItem>
                {user.email &&
                    <ListItem button>
                    <ListItemText>
                        <Link to="/dashboard">Dashboard</Link>
                    </ListItemText>
                </ListItem>}
               {!user.email ?
                <ListItem button>
                    <ListItemText>
                        <Link to="/login">Login</Link>
                    </ListItemText>
                </ListItem>:
                <ListItem button>
                    <Button onClick={logOut}>LogOut</Button>
                </ListItem>}
            </List>
            <Divider />
        </Box>
    );


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/explore'>
                        <Button color="inherit">Explore</Button>
                    </NavLink>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                            AUTO-PRO
                        </Typography>
                        <Box className={navItemContainer}>
                            <NavLink className={navItem} to='/home'>
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink className={navItem} to='/services'>
                                <Button color="inherit">Services</Button>
                            </NavLink>
                            <NavLink className={navItem} to='/technology'>
                                <Button color="inherit">Technology</Button>
                            </NavLink>
                            <NavLink className={navItem} to='/review'>
                                <Button color="inherit">Reviews</Button>
                            </NavLink>
                            {user.email &&
                                <NavLink className={navItem} to='/dashboard'>
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>}
                            {!user.email ? <NavLink className={navItem} to='/login'>
                                <Button color="inherit">Login</Button>
                            </NavLink> :
                                <Button color="inherit" onClick={logOut}>Logout</Button>}
                        </Box>
                         <Typography variant="h6" component="div">
                            {user.displayName}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
}
