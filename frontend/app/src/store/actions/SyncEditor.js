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

export const getRoomName = (name) => {
    // return dispatch => {
    //     axios.get("http://localhost:3005/joinRoom")
    //         .then(res => {
    //             dispatch(setRoomName(res.data.roomName));
    //         })
    //         .catch(err => {
    //             dispatch(fetchingRoomFailed());
    //         })
    // }
    return dispatch =>{
        dispatch(setRoomName(name));
    }
}