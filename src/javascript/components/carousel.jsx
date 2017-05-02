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

  next = () => {
    this.setState({
      current: ++this.state.current % this.props.items.length
    })
  }

  render(){
    const { items } = this.props
    const { current } = this.state

    return (
      <div className="carousel">
        <div className="carousel__track" onClick={ this.next } style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}>
          { items.map((item, i) => {
            return (<div key={ i }>{ item(current === i) }</div>)
          }) }
        </div>
      </div>
    )
  }
}