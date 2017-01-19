import React from 'react'
import { IndexLink, Link } from 'react-router'

import { CarouselData } from '../../data/carousel'

export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: false,
      current: 0
    }  
  }

  componentWillMount() {
    this.setState({
      content: CarouselData()
    })
  }

  next = () => {
    this.setState({
      current: ++this.state.current % this.state.content.length
    })
  }

  carousel(){
    return this.state.content[this.state.current]()
  }

  render() {
    return (
      <div className="page__main" onClick={ this.next }>
        <div className="page__inner">
          { this.carousel() }
        </div>
        <section className="intro">
          <Link to="products" className="intro__link">Shop Now &rarr;</Link>
        </section>
      </div>
    );
  }
}
