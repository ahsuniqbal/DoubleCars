import { connectionString } from '../../../config/ConnectionString';
const axios = require('axios');

export const GetSearchResult = (queryParams) => {
    console.log("query params", queryParams)
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