import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios')

export const postSaveCar = (obj) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "saved-cars/"
        axios.post(url,obj)
        .then(function (response) {
            // handle success
            console.log('post',response)
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