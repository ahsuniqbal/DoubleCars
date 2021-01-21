import React from 'react'
import { Input } from 'reactstrap';
import { Paperclip, Send } from 'react-feather';
import '../styles/Compose.css';
const firebase = require('firebase')
const Compose = () => {

    const sendMessage = () => {
        var msg = document.getElementById('chatMessage').value
        console.log(msg)
        document.getElementById('chatMessage').value = ""
    }

    return (
        <div className="compose">
            <Paperclip color="#1C67CE" size={30} />
            <Input id="chatMessage" type="text" placeholder="Write a message..." />
            <Send onClick={e => sendMessage()} color="#1C67CE" size={30} />
        </div>
    )
}

export default Compose
