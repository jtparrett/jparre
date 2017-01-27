import React from 'react'
import { Link } from 'react-router'

import 'stylesheets/components/product'

export default class Product extends React.Component {
  render(){
    let { product } = this.props
    return (
      <Link to={ `/products/${product.handle}` } onClick={ this.props.onClick } className="product">
        <img src={ product.images[0].src } className="product__image" />
      </Link>
    )
  }
}