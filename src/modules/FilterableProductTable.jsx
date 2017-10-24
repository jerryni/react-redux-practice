/**
- FilterableProductTable：容器，包含所有组件
    - SearchBar：获取用户输入
    - ProductTable：展示列表
        - ProductCategoryRow：类别头
        - ProductRow：商品行
**/
import React from 'react'
import SearchBar from './SearchBar.jsx'
import ProductTable from './ProductTable.jsx'
import products from '../mock/products'

// import PropTypes from 'prop-types'
class FilterableProductTable extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable products={products}/>
      </div>
    )
  }
}

export default FilterableProductTable
