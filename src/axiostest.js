import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://paul-s-awesome-demo.firebaseio.com/'
});

export default instance;
