/**
- FilterableProductTable：容器，包含所有组件
    - SearchBar：获取用户输入
    - ProductTable：展示列表
        - ProductCategoryRow：类别头
        - ProductRow：商品行
**/
import React from 'react'
import {connect} from 'react-redux'
import SearchBar from './SearchBar.jsx'
import ProductTable from './ProductTable.jsx'
import products from '../mock/products'
import * as actions from '../actions/index'
import * as types from '../constants/ActionTypes'

// import PropTypes from 'prop-types'
class FilterableProductTable extends React.Component {
    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        const {filterText, isInStock, products} = this.props
        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={isInStock}
                    // onFilterTextChange={this.handleFilterTextChange.bind(this)}
                    // onInStockChange={this.handleInStockChange.bind(this)}
                    />
                <ProductTable
                    products={products}/>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    products: store.products.products,
    filterText: store.products.filterText,
    inStock: store.products.isInStock
})

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (...args) => dispatch(actions.getProducts(...args))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableProductTable)
