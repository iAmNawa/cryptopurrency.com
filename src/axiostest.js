import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://testeronee14.firebaseio.com/'
});

export default instance;
