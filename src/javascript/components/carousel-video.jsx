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
          <video src={ require(`videos/${this.props.src}.mp4`) } ref={video => this.video = video} controls poster={ require(`images/${this.props.src}.jpg`) } />
        </div>
      </div>
    )
  }
}