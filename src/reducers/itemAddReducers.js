import { ITEM_ADD_FAIL, ITEM_ADD_REQUEST, ITEM_ADD_SUCCESS } from "../constants/additemConstants";

export const itemAddReducer = (state= {}, action) =>{
    switch (action.type) {
        case ITEM_ADD_REQUEST:
            return {loding: true}
        case ITEM_ADD_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case ITEM_ADD_FAIL:
            return{loading: false, error: action.payload}
        default:
            return state;
    }
}