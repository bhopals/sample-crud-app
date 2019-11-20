import axios from 'axios';
export const USER_LIST = "USER_LIST";
export const USER_EDIT = "USER_EDIT";
export const USER_CREATE = "USER_CREATE";
export const USER_DELETE = "USER_DELETE";
export const RESET_USER_BY_ID = "RESET_USER_BY_ID";

export const USER_FETCH_BY_ID = "USER_FETCH_BY_ID";

export function createUser(newUser) {
    console.log("newUser:", newUser);
    
    return {
        type:USER_CREATE,
        payload:{user:newUser}
    }
}

export function editUser(editUser) {
    console.log("...editUser>>",editUser);
    return {
        type:USER_EDIT,
        payload:{user:editUser}
    }
}

export function deleteUser(id) {
    return {
        type:USER_DELETE,
        payload:{id:id}
    }
}

export function userFetchById(id) {
    return {
        type:USER_FETCH_BY_ID,
        payload:{id:id}
    }
}

export function listUser(users) {
    return {
        type:USER_LIST,
        payload:{users: users}
    }
}

export function resetUserById() {
    return {
        type:RESET_USER_BY_ID,
        payload:{}
    }
}

export function apiRequest() {
    console.log("IN API Request");
    return (dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            const users = response.data;
            console.log("IN API Request SUCCESS:",users);
            dispatch(listUser(users));
        }).catch(error=>{
            console.log("IN API Request error:",error);
            console.log("ERROR");
        })
    })
}