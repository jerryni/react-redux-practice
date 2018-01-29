/**
- FilterableProductTable：容器，包含所有组件
    - SearchBar：获取用户输入
    - ProductTable：展示列表
        - ProductCategoryRow：类别头
        - ProductRow：商品行
**/
import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
// import PropTypes from 'prop-types'
class FilterableProductTable extends React.Component {
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value)
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked)
    }

    render() {
        const {filterText, inStockOnly,
            changeText,
            changeInStock
        } = this.props

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={changeText} />
                <p>
                    <label>
                        <input
                            type="checkbox"
                            checked={inStockOnly}
                            onChange={changeInStock} />
                        <span>Only show products in stock</span>
                    </label>
                </p>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    filterText: store.products.filterText,
    inStock: store.products.isInStock
})

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (...args) => dispatch(actions.changeText(...args)),
        changeInStock: (...args) => dispatch(actions.changeInStock(...args)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableProductTable)
