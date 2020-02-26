import {
    GET_USERS,
    USERS_ERROR
 } from '../constants/storeTypes';

 const initialState = {
     users: null,
     loading:true,
     errors:[]
 };


 export default function(state =  initialState, action) {
     const { type, payload} = action;

    switch(type) {
         case GET_USERS:
             return {
                 ...state,
                 users: payload,
                 loading: false
             }
        case USERS_ERROR:
            return {
                ...state,
                loading:false,
                errors: [...state, payload]
            }
        default: 
             return state
    }
 }