import { connectionString, vinAuditString } from '../../../config/ConnectionString';
const axios = require('axios');

export const GetSearchResult = (queryParams) => {
    
    return new Promise((resolve, reject) => {
        //var url = connectionString + "products/search?search=" + queryParams + "&page=" + pageNum;
        var url = connectionString + "products/search?" + queryParams
        console.log("url",url)
        axios.get(url).then(function(response){
            const data = response.data;
            
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
           // alert(error.message);
        })
    })
};

// export const GetFilterResult = (queryParams) => {
//     localStorage.setItem('Query Param',queryParams)
//     console.log("query",queryParams);
//     return new Promise((resolve, reject) => {
//         var url = connectionString + "products/search?" + queryParams;
        
//         axios.get(url).then(function(response){
//             const data = response.data.results;
//             resolve(data);
//         })
//         .catch(function(error){
//             let updatedData = false;
//             resolve(updatedData);
//            // alert(error.message);
//         })
//     })
// };


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

export const GetZipCodesList = (queryParam) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/zip-code?" + queryParam;
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