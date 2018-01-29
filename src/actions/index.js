import * as types from '../constants/ActionTypes'
import products from '../mock/products'

export const getProducts = () => {
    return {
        type: types.RECEIVE_PRODUCTS,
        products
    }
}

export const changeText = (e) => {
    return {
        type: types.TEXT_CHANGE,
        text: e.target.value
    }
}

export const changeInStock = (e) => {
    return {
        type: types.INSTOCK_CHNAGE,
        isInStock: e.target.checked
    }
}
