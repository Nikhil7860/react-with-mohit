import * as types from './actionType';
import axios from 'axios'


const AxiosBase = axios.create({
    baseURL: "http://localhost:5500/",
});



AxiosBase.interceptors.request.use(
    async(config) => {
        config.headers["authorization"] = await localStorage.getItem("acessToken");
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export const handleError = (error) => {
    alert("handle Error");
    console.log("HandleError : ", JSON.stringify(error));
    if (error.response.status === 404) {
        // showMessage(error.response.data.Message)
    }
};





const getData = (data) => ({
    type: types.GET_Data,
    payload: data,
})


export const loadUsers = () => {
    return function(dispatch) {
        AxiosBase
            .get(`getData`)
            .then((resp) => {
               console.log(resp,'in response')
               
                dispatch(getData(resp.data));
            })
            .catch((error) => console.log(error, 'in error'))
    }
}