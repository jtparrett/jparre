import React from 'react'

import 'stylesheets/components/carousel'
import 'stylesheets/components/video'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      isTouch: false,
      touchOffset: 0,
      canMove: false
    }
  }

  change = e => {
    this.setState({
      current: (e.clientX > window.outerWidth / 2) ? (
        Math.min(++this.state.current, this.props.items.length - 1)
      ) : (
        Math.max(--this.state.current, 0)
      )
    })
  }

  touchStart = e => {
    this.setState({
      touchOffset: e.nativeEvent.layerX,
      isTouch: true,
      canMove: true
    })
  }

  touch = e => {
    let { current, canMove, touchOffset } = this.state
    if(canMove){
      if(e.nativeEvent.layerX < touchOffset - 30){
        this.setState({
          current: Math.min(++current, this.props.items.length - 1),
          canMove: false
        })
      }

      if(e.nativeEvent.layerX > touchOffset + 30){
        this.setState({
          current: Math.max(--current, 0),
          canMove: false
        }) 
      }
    }
  }

  render(){
    const { items } = this.props
    const { current, isTouch } = this.state

    return (
      <div className="carousel" onClick={ !isTouch && this.change } onTouchStart={ this.touchStart } onTouchMove={ isTouch && this.touch }>
        <div className="carousel__track" style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
          { items.map((item, i) => (<div key={i}>{ item(current === i) }</div>)) }
        </div>
      </div>
    )
  }
}