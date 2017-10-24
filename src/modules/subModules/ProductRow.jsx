/**
- FilterableProductTable：容器，包含所有组件
    - SearchBar：获取用户输入
    - ProductTable：展示列表
        - ProductCategoryRow：类别头
        - ProductRow：商品行
**/
import React from 'react'
import PropTypes from 'prop-types'
class ProductRow extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }
  render() {
    let product = this.props.product,
        name;

    name = product.stocked ? 
      product.name : 
      (<span style={{color:'red'}}>
        {product.name}
      </span>)

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

export default ProductRow
