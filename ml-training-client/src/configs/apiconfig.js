import axios from 'axios';

const token = localStorage.getItem('token');

if(token) {
	axios.defaults.headers.common['Authorization'] =`Token ${token}`
}

const instance = axios.create({
    baseURL:'http://127.0.0.1:8080'
})


export default instance