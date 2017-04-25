import React from 'react'

import 'stylesheets/components/carousel'
import 'stylesheets/components/video'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      items: props.items
    }
  }

  next = () => {
    this.setState({
      current: ++this.state.current % this.state.items.length
    })
  }

  change = (index) => {
    this.setState({
      current: index
    })
  }

  render(){
    const { items, current } = this.state
    return (
      <div className="carousel">
        <div className="carousel__track" onClick={ this.next } style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
          { items.map((item, i) => {
            return (<div key={ i }>{ item() }</div>)
          }) }
        </div>
        <ul className="nav">
          { items.map((item, index) => {
            let classes = ['nav__button', index === current && 'active'].join(' nav__button--')
            return (
              <li className="nav__item" key={ index }>
                <button className={ classes } onClick={ () => { this.change(index) } }>{ index }</button>
              </li>
            )
          }) }
        </ul>
      </div>
    )
  }
}