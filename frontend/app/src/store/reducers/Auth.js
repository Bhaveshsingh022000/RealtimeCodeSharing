import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuth: false,
    error: false
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_AUTH:
            return{
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export default reducer;