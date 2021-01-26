import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');

export const GetSearchResult = (queryParams, pageNum) => {
    console.log("query params", queryParams)
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/search?search=" + queryParams + "&page=" + pageNum;
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

export const GetFilterResult = (queryParams) => {
    console.log("query",queryParams);
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/search?" + queryParams;
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