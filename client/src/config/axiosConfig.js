import axios from 'axios';

const instance = axios.create({

    baseURL: process.env.REACT_APP_ENDPOINT_BASE_URL,
    headers: {
        'Content-Type':'application/json'
    }
});

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


export default instance;