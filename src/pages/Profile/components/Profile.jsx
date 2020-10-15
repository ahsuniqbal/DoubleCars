import React from 'react';
import { Button } from 'reactstrap';
import { logout } from '../../../config/LoginAuth';

const Profile = (props) => {
    const handleLogout = () => {
        logout();
        props.history.push('/');
    }
    return(
        <div>
            Profile Private Page
            <Button onClick={() => handleLogout()}>Logout</Button>
        </div>
    );
}

export default Profile;