import React, { Component } from 'react';
import SocialLogin from 'react-social-login';

class SocialButton extends Component {

    render() {
        const { children, triggerLogin, ... props} = this.props;

        return (
            <div onClick={triggerLogin} {...props}>
                {children}
            </div>
        )
    }
}

export default SocialLogin(SocialButton)
