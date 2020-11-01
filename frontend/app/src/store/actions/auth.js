import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setAuth = (userName) => {
    return{
        type: actionTypes.SET_AUTH,
        isAuth: true,
        loading: false,
        userName: userName
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
                console.log(res.data);
                if (res.status === 422) {
                    throw new Error('Validation failed.');
                  }
                  if (res.status !== 200 && res.status !== 201) {
                    console.log('Error!');
                    throw new Error('Could not authenticate you!');
                  }
                dispatch(setAuth(res.data.name));
            })
            .catch(err =>{
                dispatch(loginFailed(err.response.data.message));
                // console.log(err.response.data.message);
            })
    }
}

export const startSignUp = ()=>{
    return{
        type: actionTypes.SIGNIN_START,
        loading: true
    }
}

export const failedSignUp = (message)=>{
    return{
        type: actionTypes.SIGNIN_FAILED,
        loading: false,
        error: message
    }
}

export const successSignUp = ()=>{
    return{
        type: actionTypes.SIGNIN_SUCCESS,
        loading: false
    }
}

export const postSignUp = (name,email,password)=>{
    return dispatch =>{
        dispatch(startSignUp());
        const formData = {
            name: name,
            email: email,
            password: password
        }
        axios.post('http://localhost:3005/signup')
    }
}