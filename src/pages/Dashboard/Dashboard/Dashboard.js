import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrder from '../MyOrder/MyOrder';
import PayNow from '../PayNow/PayNow';
import AddCar from '../AddCar/AddCar';
import AddReview from '../AddReview/AddReview';

import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useFirebase from '../../hooks/useFirebase';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from './ManageProduct/ManageProduct';


const drawerWidth = 200;

function Dashboard(props) {
    // const { admin, user } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useFirebase();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Typography variant="h6" noWrap component="div">
                {user.displayName}
            </Typography>
            <Toolbar />
            <Divider />
            <Link to={`${url}`}>
                <Button color="inherit">Dashboard</Button>
            </Link>
            <br />
            <Link to={`${url}/payNow`}>
                <Button color="inherit">Pay Now</Button>
            </Link>
            <br />
            <Link to={`${url}/myOrder`}>
                <Button color="inherit">My Order</Button>
            </Link>
            <br />
            <Link to={`${url}/addReview`}>
                <Button color="inherit">Your Review</Button>
            </Link>
            <br />
            {admin && <Box>
                <Link to={`${url}/addCar`}>
                    <Button color="inherit">Add Car</Button>
                </Link>
                <br />
                <Link to={`${url}/makeAdmin`}>
                    <Button color="inherit">Add Admin</Button>
                </Link>
                <br />
                <Link to={`${url}/manageOrders`}>
                    <Button color="inherit">Manage Orders</Button>
                </Link>
                <Link to={`${url}/manageProducts`}>
                    <Button color="inherit">Manage Product</Button>
                </Link>
            </Box>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign: 'right', flexGrow: 1 }} component="div">
                        {user.email &&
                            <Button variant="contained" onClick={logOut}>Logout</Button>}
                    </Typography>
                    <Link

                        to='/home'>
                        <Button sx={{ textAlign: 'right', color: '#fff' }} color="inherit">Go Home</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/payNow`}>
                        <PayNow></PayNow>
                    </Route>
                    <Route path={`${path}/addCar`}>
                        <AddCar></AddCar>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageOrder></ManageOrder>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;