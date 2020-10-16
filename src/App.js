import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './navigation/RouteTypes';
import './App.css';

//fallback loading
const loading = () => <div className="animated fadeIn pt-3 text-center">Learn React</div>;

//components
const NavigationBar = React.lazy(() => import('./components/NavigationBar'));

//Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const Login = React.lazy(() => import('./pages/Authentication/Login'));
const Profile = React.lazy(() => import('./pages/Profile'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <NavigationBar/>
        <Switch>
          <PublicRoute exact path="/" name="Home" restricted={false} component={props => <Home {...props} />} />
          <PublicRoute exact path="/about" name="About" restricted={false} component={props => <About {...props} />} />
          <PublicRoute exact path="/blogs" name="Blogs" restricted={false} component={props => <Blogs {...props} />} />
          <PublicRoute exact path="/login" name="Login" restricted={true} component={props => <Login {...props} />} />
          <PrivateRoute exact path="/profile" name="Profile" component={props => <Profile {...props} />} />
          <Redirect to = "/"/>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
