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
import * as actions from '../actions/index'
// import * as types from '../constants/ActionTypes'

// import PropTypes from 'prop-types'
class FilterableProductTable extends React.Component {
    componentDidMount() {
        this.props.getProducts()
    }
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (...args) => dispatch(actions.getProducts(...args))
    }
}

export default connect(null, mapDispatchToProps)(FilterableProductTable)
