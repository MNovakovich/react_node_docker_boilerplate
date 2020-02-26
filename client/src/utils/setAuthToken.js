import axiosInit from '../config/axiosConfig';
const setAuthToken =  token => {
    if (token) {
        axiosInit.defaults.headers.common['x-auth-token'] =  token;
    } else {
        delete axiosInit.defaults.headers.common['x-auth-token'];
    }
}


export default setAuthToken;
