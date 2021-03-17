import { ADD_TO_CART, DELETE_ITEM_FROM_CART, REMOVE_FROM_CART } from "./types";
// import { AppThunk } from "../../../../types/reduxTypes";

export const addToCart = (data: any) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: data
    })
}
export const removeFromCart = (data: any) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: data
    })
}
export const clearCart = (data: any) => dispatch => {
    dispatch({
        type: DELETE_ITEM_FROM_CART,
        payload: data
    })
}