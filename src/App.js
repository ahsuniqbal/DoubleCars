import React,{useEffect, useRef} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faStar, faMapPin, faPhone, faSearch, faEnvelope, faPlus, faMinus, faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import logo from './assets/DCloader.gif';
import Lottie from 'react-lottie';
// import * as lottie from 'lottie-web';
import dclogo from './assets/animations/DDCar.json'

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

// useEffect(()=> {
//   lottie.loaadanimation({
//     container: container.current,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     animationData: require('./assets/DDCar.json')
//   })

// },[])

  // to detect mobile screens 

  // const resizeWindow=function(){
  //     if (window.innerWidth <= 600) {
  //       window.location = "https://www.google.com/";
  //     }
  // }
  // window.addEventListener("resize", resizeWindow);



  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dclogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const loading = () => {
  //   return lottie.loadAnimation({
  //     container: document.getElementById('main-div'), // the dom element that will contain the animation
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: dclogo // the path to the animation json
  //   });

    return <div className="preloader">
        <img src={logo} alt="Double Cars preloader" className="img-fluid" />
      </div>


    // return <Lottie 
    // options={defaultOptions}
    // />
    
  }
 

  return (  
    <div>
    {/* Hello Ji :)  */}
    <div className = "container" ref = {container}> </div> 
    <Router forceRefresh>
      <React.Suspense fallback={loading()}>
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
