import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

//fallback loading
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

//Pages
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" name="Home" render={props => <Home {...props} />} />
          
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
