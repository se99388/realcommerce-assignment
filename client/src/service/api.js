import axios from 'axios';

const instance = axios.create({
    baseURL: '/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export const getUsers = (token) => {
    return instance({
        method: 'GET',
        url: 'api/users',
        headers: { 'Authorization': token }
    });
}

export const getToken = (data) => {
    return instance({
        method: 'POST',
        url: 'auth/login',
        data: data
    });
}