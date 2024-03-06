import axios from 'axios';
import { ADDTASK, DELETETASK, GETALLTASK, LOGIN, MARKREADTASK, REGISTER } from './apiConstants';


export const login = (data) => {
    return axios.post(LOGIN, data);
}
export const register = (data) => {
    return axios.post(REGISTER, data);
}
export const addtask = (data) => {
    let token = getToken();
    console.log("token", token);
    return axios.post(ADDTASK, data, {
        headers: {
            auth: token
        }
    });
}

export const getTaskList = (data) => {
    let token = getToken();
    return axios.get(GETALLTASK, {
        headers: {
            auth: token
        }
    });
}
export const deleteTask = (data) => {
    let token = getToken();

    return axios.post(DELETETASK, data, {
        headers: {
            auth: token
        }
    });
}

export const markReadTask = (data) => {
    let token = getToken();

    return axios.post(MARKREADTASK, data, {
        headers: {
            auth: token
        }
    });
}


export function getToken() {
    let user = localStorage.getItem('user');
    if (!user) return;
    const userObj = JSON.parse(user);
    return userObj.token;
}




