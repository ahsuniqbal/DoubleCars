import { connectionString, vinAuditString } from '../../../config/connectionString';
const axios = require('axios');

export const GetRecommendations = (id) => {
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

export const GetAllMakes = () => {
    return new Promise((resolve, reject) => {
        var url = vinAuditString + "make";
        axios.get(url).then(function(response){
            const data = response.data.selections;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            alert("Error: ", error);
        })
    })
};

export const GetModelFromMake = (makeId) => {
    return new Promise((resolve, reject) => {
        var url = vinAuditString + "make+model&make=" + makeId;
        axios.get(url).then(function(response){
            const data = response.data.selections;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            alert("Error: ", error);
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
            alert("Error: ", error);
        })
    })
};

export const GetProductsOfBodyType = (bodyType) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/body-type?type=" + bodyType;
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
