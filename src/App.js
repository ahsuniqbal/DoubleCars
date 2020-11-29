import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faStar, faMapPin, faPhone, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import logo from './assets/DCLogo.jpg';


library.add(faUser, faStar, faBookmark, faMapPin, faPhone, faSearch, faEnvelope);

//fallback loading
const loading = () => <div className="preloader">
  <img src={logo} alt="Double Cars preloader" className="img-fluid" />
</div>

const DefaultLayout = React.lazy(() => import('./components/DefaultLayout'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" render={props => <DefaultLayout {...props} /> } />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
