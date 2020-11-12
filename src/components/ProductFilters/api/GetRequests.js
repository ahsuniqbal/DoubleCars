import { vinAuditString } from '../../../config/ConnectionString';
const axios = require('axios');

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