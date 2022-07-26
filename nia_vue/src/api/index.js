import axios from 'axios'; //import axios

function showMenuApi(){ //api를 get방식으로 받아오는 통신전용 method
    const BASE_URL = 'http://__________.com/tool';
    return axios.get(BASE_URL);
}

export {showMenuApi};