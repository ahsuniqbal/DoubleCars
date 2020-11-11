import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');
const relativeString = "home/part-one";

export const GetBannerResults = () => {
    return new Promise((resolve, reject) => {
        var url = connectionString + relativeString;
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
}