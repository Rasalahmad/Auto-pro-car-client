import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import Home from './pages/Home/Home/Home';
import Review from './pages/Home/Review/Review';
import Services from './pages/Home/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Navigation from './pages/Shared/Navigation/Navigation';

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
          <Route path='/review'>
          <Review></Review>
          </Route>
          <Route path='/register'>
          <Register></Register>
          </Route>
          <Route path='/login'>
          <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
