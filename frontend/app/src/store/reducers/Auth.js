import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuth: false,
    error: false,
    loading: false
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_AUTH:
            return{
                ...state,
                isAuth: action.isAuth,
                loading: action.loading
            }
        case actionTypes.AUTH_START:
            return{
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}

export default reducer;