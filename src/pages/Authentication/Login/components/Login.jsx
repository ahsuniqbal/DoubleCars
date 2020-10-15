import React from 'react';
import { Button } from 'reactstrap';
import { login } from '../../../../config/loginAuth';


const Login = (props) => {
    const handleLogin = () => {
        login();
        props.history.push('/profile');
    }
    return(
        <div>
            Login Page
            <Button onClick={() => handleLogin()}>Click here to login</Button>
        </div>
    );
}

export default Login;