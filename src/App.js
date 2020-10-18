import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';

//fallback loading
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const DefaultLayout = React.lazy(() => import('./components/DefaultLayout'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" render={props => <DefaultLayout {...props} /> } />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
