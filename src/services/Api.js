import axios from "axios";

export const baseURL = 'https://api-senai-dusky.vercel.app';

const Api = axios.create({
    baseURL: baseURL
})

export default Api