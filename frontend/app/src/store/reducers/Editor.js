import * as actionTypes from '../actions/actionTypes';

const initialState = {
    roomName: null
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_ROOM:
            return{
                ...state,
                roomName: action.roomName
            };
        default:
            return state;
    }
}

export default reducer;