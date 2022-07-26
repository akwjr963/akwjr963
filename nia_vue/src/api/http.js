import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin']= '*';
const instance = axios.create({
    baseURL: "http://localhost:3000"
});
export default instance;