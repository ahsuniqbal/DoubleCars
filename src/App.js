import React,{useEffect,useLayoutEffect} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faStar, faMapPin, faPhone, faSearch, faEnvelope, faPlus, faMinus, faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import logo from './assets/DCLogo.jpg';

library.add(faUser, faStar, faBookmark, faMapPin, faPhone, faSearch, faEnvelope, faPlus, faMinus, faCheck, faCheckCircle);

//fallback loading
const loading = () => <div className="preloader">
  <img src={logo} alt="Double Cars preloader" className="img-fluid" />
</div>

const DefaultLayout = React.lazy(() => import('./components/DefaultLayout'));
const Login = React.lazy(() => import('./pages/Authentication/Login'))
const SignUp = React.lazy(() => import('./pages/Authentication/Signup'))


function App() {

  // to detect mobile screens 
  // useEffect(()=>{
  //   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
  //    window.location.href='https://www.google.com/'
  //     }
  // },[])
  const resizeWindow=function(){
      if (window.innerWidth <= 600) {
        window.location = "https://www.google.com/";
      }
  }
  window.addEventListener("resize", resizeWindow);
 

  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" render={props => <DefaultLayout {...props} /> } />
        </Switch>
      </React.Suspense>
    </Router>
    
  );
}

export default App;
