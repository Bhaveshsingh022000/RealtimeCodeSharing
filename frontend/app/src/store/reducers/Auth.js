import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuth: false,
    error: false,
    loading: false,
    userName: null
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_AUTH:
            return{
                ...state,
                isAuth: action.isAuth,
                loading: action.loading,
                userName: action.userName
            }
        case actionTypes.AUTH_START:
            return{
                ...state,
                loading: action.loading
            }
        case actionTypes.FAILED_LOGIN:
            return{
                ...state,
                loading: action.loading,
                isAuth: action.isAuth,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer;