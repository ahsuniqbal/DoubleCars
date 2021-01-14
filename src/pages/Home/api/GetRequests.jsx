import { useEffect } from 'react';
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
            console.log('homepart3',response)
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
        var url = connectionString + "products/body-type?type=Sedan" +bodyType;
        axios.get(url).then(function(response){
            const data = response.data.results;
            console.log('bodytype***',response)
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            alert(error.message);
        })
    })
};

export const GetFilteredPriceList = () => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/price-filter?price=5000" ;
        axios.get(url).then(function(response){
            console.log('filter***',response)
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

