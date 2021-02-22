import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios')

export const postImageToFTP = (data) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "product-images/ftp-file"
        console.log(url)
        axios.post(url,data)
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