const TOKEN_KEY = "login_token_key";

// If the person logs in this key is saved in the local storage
export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'Test Login');
}

// If the person logs out this key will be removed from the local storage
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

// This will return the key from logged in user
export const getLogin = () => {
    return localStorage.getItem(TOKEN_KEY);
}

//If the person is logged in it will return true, else false
export const isLogin = () => {
    if(localStorage.getItem(TOKEN_KEY)){
        return true;
    }
    return false;
}