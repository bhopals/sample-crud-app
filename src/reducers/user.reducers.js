import {USER_CREATE, USER_DELETE, USER_EDIT, USER_LIST, USER_FETCH_BY_ID, RESET_USER_BY_ID} from '../actions/user.action'

export default function userReducer (state, {type, payload})  {

    console.log("In Reducers - type:"+type);
    console.log("In Reducers - payload:",payload);
    console.log("In Reducers - state.users::", state.users);

    switch(type) {

        case USER_EDIT : {
            console.log("...payload.user>>",payload.user);
            return {...state, users:[...state.users]}
        }

        case USER_DELETE : {
            const newUsers = state.users.filter( user => user.id !== payload.id );
            return {...state, users:newUsers};
        }

        case RESET_USER_BY_ID : {
            const newUsers = state.users.filter( user => user.id !== payload.id );
            return {...state, user:{}};
        }

        case USER_CREATE : {
            console.log("payload.user:",payload.user);
            return {...state, users:[...state.users, payload.user], size:state.size+1};
        }

        case USER_FETCH_BY_ID : {
            console.log("payload.id ",payload.id );
             console.log("payload.id ",payload.id );
            const getUserById = state.users.filter( user => user.id == payload.id )
            console.log("payload.id>> ",getUserById);

            console.log("getUserById",getUserById);
            return {...state, user:getUserById[0]};
        }

        case USER_LIST : {
            return {...state, users:payload.users, size:payload.users.length};
        }

        default : {
            return state;
        }

    }

}

