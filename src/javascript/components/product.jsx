import React from 'react'
import { Link } from 'react-router'

import 'stylesheets/components/product'

import EnlargeIcon from '../../images/icon-enlarge.svg'

export default class Product extends React.Component {
  render(){
    let { product, enlarge } = this.props
    return (
      <Link to={ `/products/${product.attrs.handle}` } onClick={ this.props.onClick } className="product">
        { enlarge &&
          <img src={ EnlargeIcon } className="product__icon" />
        }
        <img src={ product.variants[0].imageVariants[this.props.imageSize].src } className="product__image" />
      </Link>
    )
  }
}