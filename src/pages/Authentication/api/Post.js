import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios')

export const userLogin = (obj) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "users/login"
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
export const userSignUp = (obj) => {
    return new Promise((resolve, reject) => {
        var url = URL + "users/"
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