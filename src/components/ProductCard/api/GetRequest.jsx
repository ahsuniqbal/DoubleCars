import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');

export const GetIfSaved = (productId, userId) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/" + productId + "?id=" + userId;
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