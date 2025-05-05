import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:1337/api",
    timeout: 1000,
});


export const axiosInstanceNew = axios.create({
    baseURL: 'https://bcad-102-189-220-41.ngrok-free.app/',
    withCredentials:true,
    timeout: 10000,
});


