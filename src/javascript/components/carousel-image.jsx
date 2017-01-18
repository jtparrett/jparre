import React from 'react'

import 'stylesheets/components/carousel'

export default class CarouselImage extends React.Component {
  render(){
    return (
      <div className="carousel">
        { this.props.src.map((src, index) => {
          return (
            <div key={ index } className="carousel__image">
              <img src={ src } />
            </div>
          )
        }) }
      </div>
    )
  }
}