import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faStar, faMapPin, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';


library.add(faUser, faStar, faBookmark, faMapPin, faPhone, faSearch);

//fallback loading
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

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
