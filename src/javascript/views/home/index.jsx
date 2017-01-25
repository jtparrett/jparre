import React from 'react'
import { Link } from 'react-router'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import { CarouselData } from '../../data/carousel'

export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: false,
      current: 0
    }  
  }

  componentWillMount() {
    this.setState({
      content: CarouselData()
    })
  }

  next = () => {
    this.setState({
      current: ++this.state.current % this.state.content.length
    })
  }

  render() {
    return (
      <div className="page__main page__main--actioned" onClick={ this.next }>
        <div className="page__inner">
          { this.state.content[this.state.current]() }
        </div>
        <section className="actions">
          <Link to="/products" className="actions__link">Shop Now &rarr;</Link>
        </section>
      </div>
    )
  }
}
