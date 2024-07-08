import axios from 'axios';

const Api = axios.create({
   
    baseURL: import.meta.env.VITE_APP_BASEURL,

    //set header axios
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

Api.interceptors.response.use(function (response) {

    //return response
    return response;
}, ((error) => {

    //check if response unauthenticated
    if (401 === error.response.status) {

        //remove token
      
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');

        //redirect "/admin/login"
        window.location = '/';
    } else {

        //reject promise error
        return Promise.reject(error);
    }
}));

export default Api