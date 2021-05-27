import React,{useEffect, useRef} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faStar, faMapPin, faPhone, faSearch, faEnvelope, faPlus, faMinus, faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import logo from './assets/DCNewLogo.png';
import lottie from 'react-lottie';

import { PrivateRoute } from './navigation/RouteTypes';

library.add(faUser, faStar, faBookmark, faMapPin, faPhone, faSearch, faEnvelope, faPlus, faMinus, faCheck, faCheckCircle);




//fallback loading
// const loading = () => <div className="preloader">

  
//   <img src={logo} alt="Double Cars preloader" className="img-fluid" />
// </div>

const DefaultLayout = React.lazy(() => import('./components/DefaultLayout'));
const Login = React.lazy(() => import('./pages/Authentication/Login'))
const SignUp = React.lazy(() => import('./pages/Authentication/Signup'))
const ResetPassword=React.lazy(()=>import('./pages/Authentication/ResetPassword'))
const ChangePassword=React.lazy(()=>import('./pages/Authentication/ResetPassword/components/ChangePassword'))
const Chat = React.lazy(() => import('./pages/ChatMessenger'));


function App() {
  const container = useRef(null)

useEffect(()=> {
  lottie.loaadanimation({
    container: container.current,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('./assets/DDCar.json')
  })

},[])

  // to detect mobile screens 

  // const resizeWindow=function(){
  //     if (window.innerWidth <= 600) {
  //       window.location = "https://www.google.com/";
  //     }
  // }
  // window.addEventListener("resize", resizeWindow);
 

  return (  
<div>


    <div className = "container" ref = {container}> </div> 
    <Router forceRefresh>
      <React.Suspense fallback>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path='/reset-password' component={ResetPassword}/>
          <Route path='/change-password/:id' component={ChangePassword}/>
          <PrivateRoute path="/chat" exact component={Chat} />
          <Route path="/" render={props => <DefaultLayout {...props} /> } />
          
        </Switch>
      </React.Suspense>
    </Router>
    </div>
  );
}

export default App;
