export const emailValidation = (email) => {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test(email)){
        return true;
    }
    else{
        return false;
    }
};


export const mobileRegexForDealerContact = (mobileNumber) => {
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(regex.test(mobileNumber)){
        return true;
    }
    else{
        return false;
    }
}

export const mobileValidation = (mobileNumber) => {
    // var regex = /^\+\d{1,3}-\d{9,10}$/; previous code
    var regex=/\(\d{3}\)\d{3}[-]\d{3}/ //(123)123-123 format
    // var regex = /^\d{11}$/
    if(regex.test(mobileNumber)){
        return true;
    }
    else{
        return false;
    }
};


// Minimum eight characters, at least one letter and one number
export const passwordValidation = (password) => {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regex.test(password)) {
        return true;
    }
    else {
        return false;
    }
}

export const nameValidation = (name) => {
    var regex = /^[a-zA-Z ]+$/;
    if(regex.test(name)){
        return true;
    }
    else{
        return false;
    }
}


export const validateSpecialChars = (str) => {
    if( /[^a-zA-Z0-9\-\/]/.test(str) ) {
        //alert('Input is not alphanumeric');
        return false;
    }
    return true;
}

export const validateEmail = (str) => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(str)) {
        return true;
    }else
        return false
}

export const validateSpecialCharsButSpace = (str) =>{
    var filter = /^[0-9a-zA-Z\b ]+$/
    if (filter.test(str)) {
        return true;
    }else
        return false
}

export const replaceCommas = (str) => {
    //return str.replace(/'/g, '').replace(/"/g, '').replace(/`/g,'')
    return str
}


