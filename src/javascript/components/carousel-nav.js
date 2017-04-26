import React from 'react'

export default class CarouselNav extends React.Component {
  render() {
    console.log(this.props.carousel)
    const { items, current } = this.props.carousel.state
    return (
      <ul className="nav">
        { items.map((item, index) => {
          let classes = ['nav__button', index === current && 'active'].join(' nav__button--')
          return (
            <li className="nav__item" key={ index }>
              <button className={ classes } onClick={ () => { this.props.carousel.change(index) } }>{ index }</button>
            </li>
          )
        }) }
      </ul>
    )
  }
}