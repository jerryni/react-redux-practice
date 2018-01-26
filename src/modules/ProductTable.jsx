/**
- FilterableProductTable：容器，包含所有组件
    - SearchBar：获取用户输入
    - ProductTable：展示列表
        - ProductCategoryRow：类别头
        - ProductRow：商品行
**/
import React from 'react'
import ProductCategoryRow from './subModules/ProductCategoryRow.jsx'
import ProductRow from './subModules/ProductRow.jsx'
import PropTypes from 'prop-types'
class ProductTable extends React.Component {
    static propTypes = {
        products: PropTypes.array
    }

    static defaultProps = {
        products: []
    }

    render() {
        let { products } = this.props
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return <ProductRow
                                product={product}
                                key={product.name} />
                        })
                    }
                </tbody>

            </table>
        )
    }
}

export default ProductTable
