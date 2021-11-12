import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './pages/Authentication/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import UpdateProduct from './pages/Dashboard/UpdateProduct/UpdateProduct';
import CarDetails from './pages/Home/CarDetails/CarDetails';
import Explore from './pages/Home/Explore/Explore';
import Home from './pages/Home/Home/Home';
import Review from './pages/Home/Review/Review';
import Services from './pages/Home/Services/Services';
import Technology from './pages/Home/Technology/Technology';
import UserDetails from './pages/Home/UserDetails/UserDetails';
import Footer from './pages/Shared/Footer/Footer';
import Navbar from './pages/Shared/Navbar/Navbar';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route path='/home'>
          <Home></Home>
          </Route>
          <Route path='/services'>
          <Services></Services>
          </Route>
          <Route path='/carDetails/:carId'>
          <CarDetails></CarDetails>
          </Route>
          <Route path='/technology'>
          <Technology></Technology>
          </Route>
          <Route path='/review'>
          <Review></Review>
          </Route>
          <PrivateRoute path='/userDetails/:id'>
          <UserDetails></UserDetails>
          </PrivateRoute>
          <Route path='/register'>
          <Register></Register>
          </Route>
          <PrivateRoute path='/dashboard'>
          <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/explore'>
          <Explore></Explore>
          </Route>
          <Route path='/updateProduct'>
          <UpdateProduct></UpdateProduct>
          </Route>
          <Route path='/login'>
          <Login></Login>
          </Route>
          <Route path='*'>
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
