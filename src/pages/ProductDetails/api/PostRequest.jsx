import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios')

export const SendEmail = (obj) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "users/product-query"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
            const data = response.data.results;
            let updatedData = data
            resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = false
            resolve(updatedData)
        })
      })   
}

export const messageChatMail = (obj) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "users/chat-message-mail"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
            const data = response.data.results;
            let updatedData = data
            resolve(updatedData)
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            let updatedData = false
            resolve(updatedData)
        })
      })   
}