import { connectionString, vinAuditString, GeoCodeString } from '../../../config/ConnectionString';
const axios = require('axios');

export const GetAllMakes = () => {
    return new Promise((resolve, reject) => {
        var url = vinAuditString + "&list=make";
        axios.get(url).then(function(response){
            const data = response.data.selections;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            console.log(error.message);
        })
    })
};

export const GetModelFromMake = (makeId) => {
    return new Promise((resolve, reject) => {
        var url = vinAuditString + "&list=make+model&make=" + makeId;
        axios.get(url).then(function(response){
            const data = response.data.selections;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            console.log(error.message);
        })
    })
};


export const GetTrimFromMakeAndModel = (makeId, modelId) => {
    return new Promise((resolve, reject) => {
        var url = vinAuditString + "&list=make+model+trim&make=" + makeId + "&model=" + modelId;
        axios.get(url).then(function(response){
            const data = response.data.selections;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            console.log(error.message);
        })
    })
};


export const GetZipFromLatLong = (latLong) => {
    return new Promise((resolve, reject) => {
        var url = GeoCodeString + /*"30.448,-90.752"*/ latLong;
        axios.get(url).then(function(response){
            const data = response.data;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            console.log(error.message);
        })
    })
};

export const GetFiltersList = () => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/filters-list";
        axios.get(url).then(function(response){
            const data = response.data;
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
            console.log(error.message);
        })
    })
};