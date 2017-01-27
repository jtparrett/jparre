import React from 'react'
import PageHelper from '../helper'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import Loading from '../../components/loading'
import Product from '../../components/product'
import Footer from '../../components/footer'

export default class ProductIndex extends PageHelper {
  constructor(props){
    super(props)
    this.state = {
      products: false
    }
  }

  componentDidMount() {
    this.loadProducts()
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
