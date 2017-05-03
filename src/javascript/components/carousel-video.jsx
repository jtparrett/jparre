import React from 'react'

export default class CarouselVideo extends React.Component {
  componentWillReceiveProps(props) {
    if(!props.active){
      this.video.pause()
    }
  }

  render(){
    return (
      <div className="carousel__item">
        <div className="video">
          <video src={ this.props.src } ref={video => this.video = video} controls />
        </div>
      </div>
    )
  }
}