import React, { useRef } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faStar, faMapPin, faPhone, faSearch, faEnvelope, faPlus, faMinus, faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import logo from './assets/DCloader.gif';
import Lottie from 'react-lottie';
import dclogo from './assets/animations/DDCar.json'

import { PrivateRoute } from './navigation/RouteTypes';
import { Col, Row } from 'reactstrap';

library.add(faUser, faStar, faBookmark, faMapPin, faPhone, faSearch, faEnvelope, faPlus, faMinus, faCheck, faCheckCircle);


const DefaultLayout = React.lazy(() => import('./components/DefaultLayout'));
const Login = React.lazy(() => import('./pages/Authentication/Login'))
const EmailVerify = React.lazy(() => import('./pages/Authentication/Login/components/emailVerify'))
const SignUp = React.lazy(() => import('./pages/Authentication/Signup'))
const ResetPassword=React.lazy(()=>import('./pages/Authentication/ResetPassword'))
const ChangePassword=React.lazy(()=>import('./pages/Authentication/ResetPassword/components/ChangePassword'))
const Chat = React.lazy(() => import('./pages/ChatMessenger'));


function App() {
  const container = useRef(null)


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

    // return <div className="preloader">
    //     <img src={logo} alt="Double Cars preloader" className="img-fluid" />
    //   </div>
    return <Row>
      <Col xs="12">
        <Lottie options={defaultOptions} width={330} height={200}/>
      </Col>
    </Row>
    
  }
 

  return (  
    <div>
    {/* Hello Ji :)  */}
    <div className = "container" ref = {container}> </div> 
    <Router basename="/" forceRefresh>
      <React.Suspense fallback={loading()}>
        <Switch>
          {/* <Row>
            <Col xs="12">
              <Lottie options={defaultOptions} width={330} height={200}/>
            </Col>
          </Row> */}
          <Route path="/login" component={Login}/>
          <Route path="/emailVerify" component={EmailVerify}/>
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
