import React from 'react'
import { Link } from 'react-router'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import CarouselData from '../../data/carousel'

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
      content: CarouselData
    })
  }

  next = () => {
    this.setState({
      current: ++this.state.current % this.state.content.length
    })
  }

  change = (index) => {
    this.setState({
      current: index
    })
  }

  render() {
    return (
      <div className="page__main">
        <div className="page__inner" onClick={ this.next }>
          { this.state.content[this.state.current]() }
        </div>

        <section className="actions">
          <ul className="nav">
            { this.state.content.map((item, index) => {
              let classes = ['nav__button', index === this.state.current && 'active'].join(' nav__button--')
              return (
                <li className="nav__item" key={ index }>
                  <button className={ classes } onClick={ () => { this.change(index) } }>{ index }</button>
                </li>
              )
            }) }
          </ul>

          <Link to="/products" className="actions__link">Shop Now &rarr;</Link>
        </section>
      </div>
    )
  }
}
