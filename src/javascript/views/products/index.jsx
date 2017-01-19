import React from 'react'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import Product from '../../components/product'
import Footer from '../../components/footer'

export default class ProductIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    ProductsStore.on('change', this.getProducts)
  }

  componentWillUnmount() {
    ProductsStore.removeListener('change', this.getProducts) 
  }

  componentDidMount() {
    ProductsActions.getProducts()
  }

  getProducts = () => {
    this.setState({
      products: ProductsStore.getProducts()
    })
  }

  render() {
    return (
      <div className="wrapper">
        <ul className="list">
          { this.state.products.map((product, index) => {
            return (
              <li className="list__item" key={ index }>
                <Product product={ product } />
              </li>
            )
          }) }
        </ul>
        <Footer />
      </div>
    )
  }
}
