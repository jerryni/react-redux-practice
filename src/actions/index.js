import * as types from '../constants/ActionTypes'
import products from '../mock/products'

export const getProducts = () => {
    return {
        type: types.RECEIVE_PRODUCTS,
        products
    }
}

export const changeText = text => dispatch => {
    dispatch({
        type: types.TEXT_CHANGE,
        text
    })
}

export const changeInStock = isInStock => dispatch => {
    dispatch({
        type: types.INSTOCK_CHNAGE,
        isInStock
    })
}
