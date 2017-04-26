import React from 'react'
import { Link } from 'react-router'

import CarouselData from '../../data/carousel'
import { Carousel, CarouselNav } from '../../components/carousel'

export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  next = () => {
    this.setState({
      current: ++this.state.current % CarouselData.length
    })
  }

  change = (index) => {
    this.setState({
      current: index
    })
  }

  render() {
    return (
      <div className="page__main">
        <div className="page__inner">
          <Carousel items={ CarouselData } current={ this.state.current } next={ this.next } />
        </div>
        <section className="actions">
          <CarouselNav items={ CarouselData } current={ this.state.current } change={ this.change } />
          <Link to="/products" className="actions__link">Shop Now &rarr;</Link>
        </section>
      </div>
    )
  }
}
