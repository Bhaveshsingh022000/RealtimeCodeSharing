import * as actionTypes from './actionTypes';

export const setAuth = () => {
    return{
        type: actionTypes.SET_AUTH,
        isAuth: true
    }
}

export const startAuth = ()=>{
    return dispatch => {
        dispatch(setAuth());
    }
}