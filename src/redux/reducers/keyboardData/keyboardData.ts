import { AnyAction } from "redux";

// Types
import { Ikeyboard } from "../../../types/interfaces";

// Actions Types
import { LOAD_KEYBOARDS } from "../../actionTypes/actionTypes";

export const keyboardDataReducer = (state: Ikeyboard[] = [], action: AnyAction) => {

    switch(action.type) {
        case LOAD_KEYBOARDS:
            state = action.payload
        default:
            return state
    }

}