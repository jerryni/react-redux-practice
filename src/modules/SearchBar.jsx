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
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked) 
  }

  render() {
    const filterText = this.props.filterText
    const inStockOnly = this.props.inStockOnly

    return (
      <div>
        <input 
          type="text" 
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange.bind(this)}/>
        <p>
          <label> 
            <input 
              type="checkbox" 
              checked={inStockOnly}
              onChange={this.handleInStockChange.bind(this)}/>
            <span>Only show products in stock</span>
          </label>
        </p>
      </div>
    )
  }
}

export default FilterableProductTable
