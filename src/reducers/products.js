import {
    combineReducers
} from 'redux'
import {
    TEXT_CHANGE,
    INSTOCK_CHNAGE,
    RECEIVE_PRODUCTS
} from '../constants/ActionTypes'

const filterText = (state = '', action) => {
    switch (action.type) {
        case TEXT_CHANGE:
            return action.text
        default:
            return state
    }
}

const products = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products
        default:
            return state
    }
}

const isInStock = (state = '', action) => {
    switch (action.type) {
        case INSTOCK_CHNAGE:
            return action.isInStock
        default:
            return state
    }
}

export const getFilteredProducts = (state) => {
    return state.products.filter((product) => {
        if(state.isInStock && !product.stocked) {
            return false
        }

        if(state.filterText &&
            (product.name.indexOf(state.filterText) === -1)) {
            return false
        }

        return true
    })
}

export default combineReducers({
    filterText,
    isInStock,
    products
})
