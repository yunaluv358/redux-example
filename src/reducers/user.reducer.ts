import {userConstants} from '../constants'

let user = JSON.parse(<string>sessionStorage.getItem('user'))
const initialState = user ? {loggedIn: true, user}:{}
export function userReducers(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            }
        case userConstants.LOGIN_FAIL:
            return {}
        default:
            return state
        case userConstants.JOIN_REQUEST:
            return {
                join: true,
                user: action.user
            }
        case userConstants.JOIN_SUCCESS:
            return {
                join: true,
                user: action.user
            }
        case userConstants.JOIN_FAIL:
            return {}
            return state

    }

}