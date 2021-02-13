import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');


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
            alert(error.message);
        })
    })
};

export const GetSellerInventory = (id) => {
    return new Promise((resolve, reject) => {
        var url = connectionString + "products/seller/" + id;
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
}


export const GetSearchResult = (queryParams) => {
    return new Promise((resolve, reject) => {
        //var url = connectionString + "products/search?search=" + queryParams + "&page=" + pageNum;
        var url = connectionString + "products/search?" + queryParams
        console.log("url",url)
        axios.get(url).then(function(response){
            const data = response.data.results;
            
            resolve(data);
        })
        .catch(function(error){
            let updatedData = false;
            resolve(updatedData);
           // alert(error.message);
        })
    })
};

