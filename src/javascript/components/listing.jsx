import React from 'react'
import { IndexLink, Link } from 'react-router'

import 'stylesheets/components/listing'

export default class Listing extends React.Component {
  render(){
    let { product } = this.props
    return (
      <Link to={ `products/${product.handle}` } className="listing">
        <img src={ product.images[0].src } className="listing__image" />
      </Link>
    )
  }
}