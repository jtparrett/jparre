import React from 'react'

import 'stylesheets/components/carousel'
import 'stylesheets/components/video'

export class Carousel extends React.Component {
  render(){
    const { items, current, next } = this.props
    return (
      <div className="carousel">
        <div className="carousel__track" onClick={ next } style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
          { items.map((item, i) => {
            return (<div key={ i }>{ item(current === i) }</div>)
          }) }
        </div>
      </div>
    )
  }
}

export class CarouselNav extends React.Component {
  render() {
    const { items, current, change } = this.props
    return (
      <ul className="nav">
        { items.map((item, index) => {
          let classes = ['nav__button', index === current && 'active'].join(' nav__button--')
          return (
            <li className="nav__item" key={ index }>
              <button className={ classes } onClick={ () => { change(index) } }>{ index }</button>
            </li>
          )
        }) }
      </ul>
    )
  }
}