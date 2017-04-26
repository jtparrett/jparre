import React from 'react'

export default class CarouselImage extends React.Component {
  render(){
    let classes = ['carousel__image', this.props.large && 'large'].join(' carousel__image--')
    return (
      <div className="carousel__item">
        { this.props.src.map((src, index) => {
          return (
            <div key={ index } className={ classes }>
              <img src={ src } />
            </div>
          )
        }) }
      </div>
    )
  }
}