import { SHOW_LOGIN, SHOW_LOGOUT, SHOW_SIGNUP, LOGIN_SUCCESSFUL, LOGOUT} from '../actions/authentication';
import {show_login, show_logout, show_signup, login_successful, logout} from '../actions/authentication';

const initialState = {
    loginSuccessful : false,
    onSignUp:false,
    onLogin:true,
    loggedInUser : {
        email:'',
        user:{}
    },

}



const reducer = (state = initialState, action) => {

    switch(action.type){
        case LOGIN_SUCCESSFUL: 
            return{
                ...state,
                loginSuccessful : true,
                onLogin:true,
                onSignUp:false,
                loggedInUser :{
                    email: action.email,
                    user:action.user
                }
            };
        
        case LOGOUT:
            return{
                ...state,
                loginSuccessful : false,
                onLogin:true,
                onSignUp:false,
                loggedInUser:{}
            }

        case SHOW_LOGIN:
            return {
                ...state,
                loginSuccessful : action.loginSuccessful,
                onSignUp:false,
                onLogin:true

            };
        
        case SHOW_LOGOUT:
            return {
                ...state,
                loginSuccessful: false
            };
        case SHOW_SIGNUP:
            return {...state,
            onSignUp:true,
            onLogin:false
        };
        default:
            return state;
    }
}

export default reducer;