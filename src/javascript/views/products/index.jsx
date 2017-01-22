import React from 'react'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import Loading from '../../components/loading'
import Product from '../../components/product'
import Footer from '../../components/footer'

export default class ProductIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: false
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
    if(!this.state.products){
      return (<Loading />)
    }

    return (
      <div className="wrapper">
        <ul className="list">
          { this.state.products.map((product, index) => {
            return (
              <li className="list__item" key={ index }>
                <Product product={ product } imageSize={6} />
              </li>
            )
          }) }
        </ul>
        <Footer />
      </div>
    )
  }
}
