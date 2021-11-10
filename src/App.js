import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import CarDetails from './pages/Home/CarDetails/CarDetails';
import Explore from './pages/Home/Explore/Explore';
import Home from './pages/Home/Home/Home';
import Review from './pages/Home/Review/Review';
import Services from './pages/Home/Services/Services';
import Technology from './pages/Home/Technology/Technology';
import Footer from './pages/Shared/Footer/Footer';
import Navigation from './pages/Shared/Navigation/Navigation';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation></Navigation>
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
          <Route path='/register'>
          <Register></Register>
          </Route>
          <Route path='/dashboard'>
          <Dashboard></Dashboard>
          </Route>
          <Route path='/explore'>
          <Explore></Explore>
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
