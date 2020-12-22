import React,{useState, useEffect} from 'react';
import {getUserChats,getRecieverChat} from '../../../components/Firebase/database'
import {getChatUserPics} from '../api/Get'
const Dashboard = () => {
    const [chats,setChats] = useState({})
    useEffect(() => {
        getRecieverChat("73","78")
        .then(doc => {
            console.log(doc)
        })
        .catch(e => {
            console.log(e.message)
        })
        

        getUserChats(73)
        .then(snap => {
           // console.log(snap)
            getChatUserPics(snap.userIds.toString())
            .then(doc => {
             //   console.log('doc',doc)
            })
            .catch(e => {
                console.log(e.message)
            })
            
        })
        
    },[])
    return(
        <div>
            Chat Messenger Dashboard
        </div>
    )
}

export default Dashboard;