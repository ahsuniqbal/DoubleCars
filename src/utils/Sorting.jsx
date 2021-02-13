// Bubble sort algorithm to sort the products array using price
export const SortByPrice = (productsArray) => {

    for (var i = productsArray.length - 1; i >= 0; i--){
        for(var j = 1; j <= i; j++){
          if(productsArray[j-1].price >= productsArray[j].price){
              var temp = productsArray[j-1];
              productsArray[j-1] = productsArray[j];
              productsArray[j] = temp;
           }
        }
    }
    return productsArray;
}

// Bubble sort algorithm to sort the products array using product ID
export const SortByRelevance = (productsArray) => {

    for (var i = productsArray.length - 1; i >= 0; i--){
        for(var j = 1; j <= i; j++){
          if(productsArray[j-1].productId > productsArray[j].productId){
              var temp = productsArray[j-1];
              productsArray[j-1] = productsArray[j];
              productsArray[j] = temp;
           }
        }
    }
    return productsArray;
}