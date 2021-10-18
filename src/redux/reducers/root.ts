import { combineReducers } from "redux";

// Reducers
import { keyboardDataReducer } from "./keyboardData/keyboardData";
import { userReducer } from "./user/user";

export const rootReducer = combineReducers({
    keyboardsData: keyboardDataReducer,
    user: userReducer
})