import React from 'react'

import 'stylesheets/components/carousel'

export default class CarouselImage extends React.Component {
  render(){
    return (
      <div className="carousel">
        { this.props.src.map((src, index) => {
          return (<img key={ index } src={ src } className="carousel__image" />)
        }) }
      </div>
    )
  }
}