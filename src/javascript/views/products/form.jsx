import React from 'react'
import { Link } from 'react-router'

import CustomSelect from '../../components/custom-select'

export default class PurchaseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      variant: 0,
      variants: props.product.variants.filter((variant) => {
        return variant.available
      })
    }
  }

  updateVariant = (e) => {
    this.setState({
      variant: e.target.value
    })
  }

  render() {
    let { product } = this.props

    if(!product.attrs.available){
      return (
        <p className="detail__sold-out">Sold Out</p>
      )
    }

    return (
      <form action={ this.state.variants[this.state.variant].checkoutUrl(1) } method="post" className="detail__actions">
        <CustomSelect onChange={ this.updateVariant }>
          { this.state.variants.map((varient, index) => {
            return (<option key={ index } value={ index }>{ varient.title }</option>)
          })}
        </CustomSelect>
        <button type="submit" className="button">Purchase</button>
      </form>
    )
  }
}
