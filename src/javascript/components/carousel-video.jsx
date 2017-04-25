import React from 'react'

export default class CarouselVideo extends React.Component {
  render(){
    return (
      <div className="carousel__item">
        <div className="video">
          <iframe src={ `https://www.facebook.com/plugins/video.php?href=${this.props.src}` }></iframe>
        </div>
      </div>
    )
  }
}