import { vinAuditString, GeoCodeString } from '../../../config/ConnectionString';
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
            alert("Error: ", error);
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
            alert("Error: ", error);
        })
    })
};


export const GetZipFromLatLong = (latLong) => {
    return new Promise((resolve, reject) => {
        var url = GeoCodeString + /*"30.448,-90.752"*/ latLong;
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

