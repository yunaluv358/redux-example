import {userConstants} from '../constants'
import {userService} from "../apis";

const userActions = {
    login, join
}

function request(userid:string):object {
    return { type: userConstants.LOGIN_REQUEST, userid}
}
function success(userid:string):object {
    return { type: userConstants.LOGIN_SUCCESS, userid}
}
function failure(userid:string, error:string):object {
    return { type: userConstants.LOGIN_FAIL, userid, error}
}
function login(userid, password) {
    alert(`ID: ${userid}, PW: ${password}`)

    return dispatch =>{
        dispatch(request(userid))
    }
}


function join(userid, password, name) {
    alert(`ID: ${userid}, PW: ${password}, name: ${name}`)

    return dispatch =>{
        dispatch(request(userid))
    }
}
export default userActions