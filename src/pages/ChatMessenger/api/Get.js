import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');


export const getChatUserPics = (chats) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "users/chat/pics?ids="+chats;
        axios.get(url).then(function(response){
            const data = response.data.results;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            console.log(error.message);
        })
    })
};

export const getUser = (id) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + `users/${id}`;
        axios.get(url).then(function(response){
            const data = response.data.results;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            console.log("Error: ", error);
        })
    })
};