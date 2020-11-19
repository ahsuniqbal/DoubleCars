const TOKEN_KEY = "login_token_key";

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'Test Login');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const getLogin = () => {
    return localStorage.getItem(TOKEN_KEY);
}

export const isLogin = () => {
    if(localStorage.getItem(TOKEN_KEY)){
        return true;
    }
    return false;
}