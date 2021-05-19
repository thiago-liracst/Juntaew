import axios from 'axios';

const api = axios.create({
    baseURL: env.proces.REACT_APP_API_URL,
})

export default api;
