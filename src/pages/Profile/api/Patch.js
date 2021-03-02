import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios')

export const changePassword = (id,obj) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "users/change-passwords/" + id
        axios.patch(url,obj)
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

export const updateUser = (id,obj) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "users/" + id
        axios.patch(url,obj)
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