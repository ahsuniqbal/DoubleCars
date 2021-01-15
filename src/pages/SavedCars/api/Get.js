import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');


export const getSaveCars = (userId) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + `saved-cars/user/${userId}`;
        axios.get(url).then(function(response){
            const data = response.data.results;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
        })
    })
};