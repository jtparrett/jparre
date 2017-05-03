import React from 'react'

import 'stylesheets/components/carousel'
import 'stylesheets/components/video'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
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

  render(){
    const { items } = this.props
    const { current } = this.state

    return (
      <div className="carousel" onClick={ this.change }>
        <div className="carousel__track" style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
          { items.map((item, i) => {
            return (<div key={ i }>{ item(current === i) }</div>)
          }) }
        </div>
      </div>
    )
  }
}