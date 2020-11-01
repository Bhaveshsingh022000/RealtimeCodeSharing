import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setAuth = () => {
    return{
        type: actionTypes.SET_AUTH,
        isAuth: true,
        loading: false
    }
}

export const startAuth = ()=>{
    return {
        type: actionTypes.AUTH_START,
        loading: true
    } 
}

export const startLogin = (email,password)=>{
    return dispatch =>{
        dispatch(startAuth());
        const formData = {
            email: email,
            password: password
        }
        axios.post('http://localhost:3005/login', formData)
            .then(res =>{
                dispatch(setAuth());
            })
            .catch(err =>{
                console.log(err);
            })
    }
}