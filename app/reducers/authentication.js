import { SHOW_LOGIN, SHOW_LOGOUT, SHOW_SIGNUP} from '../actions/authentication';
import {show_login, show_logout, show_signup} from '../actions/authentication';

const initialState = {
    loginSuccessful : false,
    onSignUp:false,
    onLogin:true,
    logedInUser : {
        email:'',
        user:{}
    },

}



const reducer = (state = initialState, action) => {

    switch(action.type){
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