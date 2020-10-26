import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons';



library.add(faUser, faStar);

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
