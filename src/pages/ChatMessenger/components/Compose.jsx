import React from 'react'
import { Input } from 'reactstrap';
import { Paperclip, Send } from 'react-feather';
import '../styles/Compose.css';

const Compose = () => {
    return (
        <div className="compose">
            <Paperclip color="#1C67CE" size={30} />
            <Input type="text" placeholder="Write a message..." />
            <Send color="#1C67CE" size={30} />
        </div>
    )
}

export default Compose
