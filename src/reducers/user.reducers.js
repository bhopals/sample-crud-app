import {USER_CREATE, USER_DELETE, USER_EDIT, USER_LIST} from '../actions/user.action'

export default function userReducer (state, {type, payload})  {

    console.log("In Reducers - type:"+type);
    console.log("In Reducers - payload:",payload);
    console.log("In Reducers - state.users::", state.users);

    switch(type) {

        case USER_EDIT : {
            const editUser = state.users.map( user => {
                if(user.id !== payload.user.id){
                    user.name = payload.user.name;
                    user.email = payload.user.email;
                    user.phone = payload.user.phone;
                    user.website = payload.user.website;
                    user.username = payload.user.username;
                }
            });
            return {...state, users:editUser}
        }

        case USER_DELETE : {
            const newUsers = state.users.filter( user => user.id !== payload.id );
            return {...state, users:newUsers};
        }

        case USER_CREATE : {
            console.log("payload.user:",payload.user);
            return {...state, users:[...state.users, payload.user], size:state.size+1};
        }

        case USER_LIST : {
            return {...state, users:payload.users, size:payload.users.length};
        }

        default : {
            return state;
        }

    }

}

