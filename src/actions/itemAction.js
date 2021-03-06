import Axios from "axios";
import { ITEMS_LIST_FAIL, ITEMS_LIST_REQUEST, ITEMS_LIST_SUCCESS } from "../constants/itemsConstants"

export const listItems = () => async(dispatch) => {
    dispatch({
        type: ITEMS_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get("/fridge");
        dispatch({type: ITEMS_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: ITEMS_LIST_FAIL, payload: error.message});
    }
}