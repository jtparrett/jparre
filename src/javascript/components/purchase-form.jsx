import React from 'react'
import { Link } from 'react-router'

import CustomSelect from './custom-select'

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

  onSubmit = (e) => {
    e.preventDefault()
    window.location = this.state.variants[this.state.variant].checkoutUrl(1)
  }

  render() {
    let { product } = this.props

    if(!product.attrs.available){
      return (
        <p className="detail__sold-out">Sold Out</p>
      )
    }

    return (
      <form onSubmit={ this.onSubmit } className="detail__actions">
        <CustomSelect onChange={ this.updateVariant }>
          { this.state.variants.map((varient, index) => {
            return (<option key={ index } value={ index }>{ varient.title }</option>)
          })}
        </CustomSelect>
        <button className="button">Purchase</button>
      </form>
    )
  }
}
