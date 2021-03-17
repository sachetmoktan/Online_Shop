import { ADD_TO_CART, DELETE_ITEM_FROM_CART, REMOVE_FROM_CART } from "./types";
// import { IAction, AppThunk } from "../../../../types/reduxTypes";
import { addItemToCart, deleteItemFromCart, removeItemFromCart } from "utils/cart/cart-utils";

const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
              };


        case REMOVE_FROM_CART:
            return {
                ...state,
                items: removeItemFromCart(state.items, action.payload)
              };

        case DELETE_ITEM_FROM_CART:
            return {
              ...state,
              items: deleteItemFromCart(state.items, action.payload)
            }

        default:
            return state
    }
};

export default cartReducer;