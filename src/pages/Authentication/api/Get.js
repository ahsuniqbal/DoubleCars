import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');

export const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "&list=make";
        axios.get(url).then(function(response){
            const data = response.data.selections;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            alert(error.message);
        })
    })
};