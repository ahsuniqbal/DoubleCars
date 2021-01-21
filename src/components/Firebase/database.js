import { queries } from '@testing-library/react';

const firebase = require('firebase').default

var firebaseConfig = {
  apiKey: "AIzaSyAUAUMJD1IEHPmSxx7ws9ecm2NJboPACNQ",
  authDomain: "double-cars-183a8.firebaseapp.com",
  databaseURL: "https://double-cars-183a8.firebaseio.com",
  projectId: "double-cars-183a8",
  storageBucket: "double-cars-183a8.appspot.com",
  messagingSenderId: "409175483572",
  appId: "1:409175483572:web:b270c9564a77c1f20563e1",
  measurementId: "G-SRT6P0S2PH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const firestore = firebase.firestore()


export const getChats = () => {
    return new Promise((resolve, reject) => {
        firestore.collection("Chats").get().then((snapshot) => {
        //console.log('onSnapshot Called!',snapshot.data())
        let updatedData = snapshot
          resolve(updatedData)
        }, reject)
      }) 
}

export const getUserChats = (userId) => {
  return new Promise((resolve, reject) => {
      firestore.collection("Chats").get().then((snapshot) => {
      //console.log('onSnapshot Called!',snapshot.data())
      var arr = []
      var userArray = []
      snapshot.docs.map(doc => {
          if(doc.data().receiverId == userId || doc.data().senderId == userId){
            arr.push(doc.data())
            
            userArray.push(doc.data().receiverId == userId ? doc.data().senderId : doc.data().receiverId)
          }
      })
      const obj = {
        chats : arr,
        userIds : userArray
      }
      resolve(obj)
      }, reject)
    }) 
}


export const getRecieverChat = (senderId,receiverId) => {
  const key = [senderId, receiverId].sort().join('-')
  return new Promise((resolve, reject) => {
    firestore.collection("Chats").doc(key).collection('Messages')
    .orderBy('messagedAt','asc')
    .onSnapshot((snapshot) => {
      let updatedData = snapshot.docs.map(doc => doc.data())
      resolve(updatedData)
    })
  })
}

