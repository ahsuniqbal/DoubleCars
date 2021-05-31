import { Button } from 'reactstrap';
import React from 'react';
import Tick from '../../../../assets/icons/13225365361543238866.svg'

const EmailVerify = () =>{
    return(
        <div style={{height:'625px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img src={Tick} width="60" alt="Tick" />
            <h5 className="mt-2">Thank You</h5>
            <small className="text-muted" >You have verified your email</small>
            <a className="btn mt-2  btn-primary" href="https://doublecarsnode.herokuapp.com/" style={{fontSize:'small',padding:'3px 40px '}}>
                CONTINUE
            </a>
        </div>
    )
}

export default EmailVerify