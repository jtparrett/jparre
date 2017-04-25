import React from 'react'

export default class CarouselImage extends React.Component {
  render(){
    return (
      <div className="carousel__item">
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