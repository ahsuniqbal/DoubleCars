import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');
// const relativeString = "products/search?search=";

export const GetSearchResult = (queryParams) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/search?search=" + queryParams;
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
            alert("Error: ", error);
        })
    })
};

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
            alert("Error: ", error);
        })
    })
};