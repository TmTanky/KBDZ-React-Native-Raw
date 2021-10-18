import { AnyAction } from "redux";

// Types
import { Iuser } from "../../../types/interfaces";
import { LOGIN_USER, LOGOUT_USER } from "../../actionTypes/actionTypes";

const INITIAL_STATE = {
    displayName: '',
    email: '',
    uid: ''
}

export const userReducer = (state: Iuser = INITIAL_STATE, action: AnyAction) => {

    switch(action.type) {
        case LOGIN_USER:
            return state = action.payload
        case LOGOUT_USER:
            return state = INITIAL_STATE
        default:
            return state
    }

}