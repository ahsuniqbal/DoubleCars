import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');

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

export const GetAllBodyTypes = () => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "home/part-three";
        axios.get(url).then(function(response){
            const data = response.data.bodyTypes;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            alert(error.message);
        })
    })
};

export const GetProductsOfBodyType = (bodyType) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/body-style" + bodyType;
        axios.get(url).then(function(response){
            const data = response.data.results;
            console.log(response) 
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            alert(error.message);
        })
    })
};

export const GetFilteredPriceList = (bodyType) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "/products/price-filter?price=5000" + bodyType;
        axios.get(url).then(function(response){
            const data = response.data.results;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            alert(error.message);
        })
    })
};
