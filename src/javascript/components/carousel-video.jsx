import React from 'react'

import 'stylesheets/components/video'

export default class CarouselVideo extends React.Component {
  render(){
    return (
      <div className="carousel">
        <div className="video">
          <iframe src={ this.props.src }></iframe>
        </div>
      </div>
    )
  }
}