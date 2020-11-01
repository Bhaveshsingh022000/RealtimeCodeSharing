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

export const loginFailed = (message)=>{
    return{
        type: actionTypes.FAILED_LOGIN,
        loading: false,
        isAuth: false,
        error: message
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
                // console.log(res.data);
                if (res.status === 422) {
                    throw new Error('Validation failed.');
                  }
                  if (res.status !== 200 && res.status !== 201) {
                    console.log('Error!');
                    throw new Error('Could not authenticate you!');
                  }
                dispatch(setAuth());
            })
            .catch(err =>{
                dispatch(loginFailed(err.response.data.message));
                // console.log(err.response.data.message);
            })
    }
}