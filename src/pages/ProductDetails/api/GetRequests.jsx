import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');

export const GetProductDetails = (id) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/" + id;
        axios.get(url).then(function(response){
            const data = response.data.results;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            console.log(error.message);
        })
    })
};


export const GetSellerDetails = (id) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "users/" + id;
        axios.get(url).then(function(response){
            const data = response.data.results;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            console.log(error.message);
        })
    })
};


export const GetRecommendationsTrendings = (id) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "home/part-two?id=" + id;
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