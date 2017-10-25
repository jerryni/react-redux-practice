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
  state = {
    filterText: '',
    inStockOnly: false
  }
  handleFilterTextChange(filterText) {
    this.setState({
      filterText
    })
  }
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly
    })
  }
  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange.bind(this)}
          onInStockChange={this.handleInStockChange.bind(this)}/>
        <ProductTable 
          products={products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
      </div>
    )
  }
}

export default FilterableProductTable
