import React from 'react'
import { IndexLink, Link } from 'react-router'

import 'stylesheets/components/product'

export default class Product extends React.Component {
  render(){
    let { product } = this.props
    return (
      <Link to={ `/products/${product.attrs.handle}` } className="product">
        <img src={ product.variants[0].imageVariants[this.props.imageSize].src } className="product__image" />
      </Link>
    )
  }
}