import React from 'react'
import { Link } from 'react-router'

import CarouselData from '../../data/carousel'
import Carousel from '../../components/carousel'

export default class HomeIndex extends React.Component {
  render() {
    return (
      <div className="page__main">
        <div className="page__inner">
          <Carousel items={ CarouselData } />
        </div>
        <section className="actions">
          <Link to="/products" className="button">Shop The Collection &rarr;</Link>
        </section>
      </div>
    )
  }
}
