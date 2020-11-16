import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');

export const GetRecommendations = (id) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "/home/part-two?id=" + id;
        axios.get(url).then(function(response){
            const data = response.data.results;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            alert("Error: ", error);
        })
    })
};