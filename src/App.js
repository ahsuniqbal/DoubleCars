import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import NavigationBar from "./NavigationBar/NavigationBar"

//fallback loading
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

//Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About/Components/About'));
const Blogs = React.lazy(() => import('./pages/Blogs/Components/Blogs'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <NavigationBar/>
        <Switch>
          <Route exact path="/" name="Home" render={props => <Home {...props} />} />
          <Route exact path="/about" name="About" render={props => <About {...props} />} />
          <Route exact path="/blogs" name="Blogs" render={props => <Blogs {...props} />} />

        </Switch>
        <Redirect to = "/"/>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
