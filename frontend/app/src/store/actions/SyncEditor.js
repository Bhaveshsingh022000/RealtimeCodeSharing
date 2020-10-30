import * as actionTypes from './actionTypes';
import axios from 'axios';


export const setRoomName = (name) => {
    return{
        type: actionTypes.SET_ROOM,
        roomName: name
    }
}

export const fetchingRoomFailed = () => {
    return{
        type: actionTypes.FETCHING_ROOM_FAILED
    }
}

export const getRoomName = () => {
    return dispatch => {
        axios.get("http://localhost:3005/joinRoom")
            .then(res => {
                dispatch(setRoomName(res.data));
            })
            .catch(err => {
                dispatch(fetchingRoomFailed());
            })
    }
}