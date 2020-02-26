import {
   GET_USERS,
   USERS_ERROR
} from '../constants/storeTypes'

import users from '../dataDump';


export const fetchUsers =   () => async dispatch => {
   try {
       const result = await users;
       dispatch({
           type:GET_USERS,
           payload: result
       })
   } catch (error) {
       console.log(error);
        dispatch({
            type:USERS_ERROR,
            payload: error.message
        })
   }
}