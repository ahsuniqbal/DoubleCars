import React,{useState, useEffect} from 'react';
import {getChats} from '../../components/Firebase/database'
const Dashboard = () => {
    const [chats,setChats] = useState({})
    useEffect(() => {
        getChats()
        .then(doc => {
            console.log("doc",doc)
        })
        
    },[])
    return(
        <div>
            Chat Messenger Dashboard
        </div>
    )
}

export default Dashboard;