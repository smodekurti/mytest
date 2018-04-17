export const SHOW_LOGIN = 'SHOW_LOGIN';

export const SHOW_LOGOUT = 'SHOW_LOGOUT';

export const SHOW_SIGNUP = 'SHOW_SIGNUP';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';

export const LOGOUT = 'LOGOUT';


export const show_login = () => ({
    type : SHOW_LOGIN
})

export const show_logout = () => ({
    type : SHOW_LOGOUT
})

export const show_signup = () => ({
    type : SHOW_SIGNUP
})

export const login_successful = (user, email) => ({
    type : LOGIN_SUCCESSFUL,
    email:email,
    user : user
})

export const logout = () => ({
    type : LOGOUT
})