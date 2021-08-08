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

export const getSimilarCars = (bodyStyle) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/similar-cars?bodyStyle=" + bodyStyle;
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



export const GetTopDealers = (make, model) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + `products/top-dealers-make-model?make=${make}&model=${model}`;
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
}