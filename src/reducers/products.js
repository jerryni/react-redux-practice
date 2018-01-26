import {
    combineReducers
} from 'redux'
import {
    TEXT_CHANGE,
    INSTOCK_CHNAGE,
    RECEIVE_PRODUCTS
} from '../constants/ActionTypes'

const filteredProducts = (state = [], action) => {
    switch (action.type) {
        case TEXT_CHANGE:
        case INSTOCK_CHNAGE:
            // 这边执行过滤逻辑
            return state.products.filter((product) => {
                return product.stocked && product.name.indexOf(filterText) > -1;
            })
        default:
            return state
    }
}

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

export default combineReducers({
    filteredProducts,
    filterText,
    isInStock,
    products
})
