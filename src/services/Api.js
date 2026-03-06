import axios from "axios";

const Api = axios.create({
    baseURL: 'https://api-senai-dusky.vercel.app/'
})

export default Api