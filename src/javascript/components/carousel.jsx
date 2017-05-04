import React from 'react'

import 'stylesheets/components/carousel'
import 'stylesheets/components/video'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      isTouch: false,
      canMove: false,
      touchOffset: 0
    }
  }

  next = current => Math.min(++current, this.props.items.length - 1)
  prev = current => Math.max(--current, 0)

  update = thunk => {
    this.setState({
      current: thunk(this.state.current),
      canMove: false
    })
  }

  onClick = e => {
    if(e.clientX > window.outerWidth / 2){
      this.update(this.next)
    } else {
      this.update(this.prev)
    }
  }

  touchStart = e => {
    this.setState({
      isTouch: true,
      canMove: true,
      touchOffset: e.nativeEvent.layerX
    })
  }

  touchMove = e => {
    const { touchOffset } = this.state
    if(e.nativeEvent.layerX < touchOffset - 30){
      this.update(this.next)
    }

    if(e.nativeEvent.layerX > touchOffset + 30){
      this.update(this.prev)
    }
  }

  render(){
    const { items } = this.props
    const { current, isTouch, canMove } = this.state

    return (
      <div className="carousel" onClick={ !isTouch && this.onClick } onTouchStart={ this.touchStart } onTouchMove={ canMove && this.touchMove }>
        <div className="carousel__track" style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
          { items.map((item, i) => (<div key={i}>{ item(current === i) }</div>)) }
        </div>
      </div>
    )
  }
}