/**
- FilterableProductTable：容器，包含所有组件
    - SearchBar：获取用户输入
    - ProductTable：展示列表
        - ProductCategoryRow：类别头
        - ProductRow：商品行
**/
import React from 'react'
// import PropTypes from 'prop-types'
class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Search..."/>
        <p>
          <label> 
            <input type="checkbox"/>
            <span>Only show products in stock</span>
          </label>
        </p>
      </div>
    )
  }
}

export default FilterableProductTable
