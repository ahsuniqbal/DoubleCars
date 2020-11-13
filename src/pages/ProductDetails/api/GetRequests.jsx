import { connectionString } from '../../../config/connectionString';
const axios = require('axios');
const relativeString = "products/";

export const GetProductDetails = (id) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + relativeString + id;
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