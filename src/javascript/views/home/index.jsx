import React from 'react'
import { IndexLink, Link } from 'react-router'

import CarouselImage from '../../components/carousel-image'
import CarouselVideo from '../../components/carousel-video'

// Content
import Banner1 from 'images/carousel/IMG_1804.JPG'
import Banner2 from 'images/carousel/IMG_3023.JPG'
import Banner3 from 'images/carousel/IMG_6815.JPG'
import Banner4 from 'images/carousel/IMG_2630.JPG'

export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      content: [() => {
        return (<CarouselImage src={ [Banner1, Banner2, Banner3] } />)
      }, () => {
        return (<CarouselVideo src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FJParreApparel%2Fvideos%2F593954704148136%2F&show_text=false&appId=393584064135283" />)
      }, () => {
        return (<CarouselImage src={ [Banner4] } />)
      }]
    }  
  }

  carousel(){
    return this.state.content[this.state.current]()
  }

  next = () => {
    this.setState({
      current: ++this.state.current % this.state.content.length
    })
  }

  render() {
    return (
      <div>
        <div onClick={ this.next }>
          { this.carousel() }
        </div>
        <section className="intro">
          <Link to="products" className="intro__link">Shop Now &rarr;</Link>
        </section>
      </div>
    );
  }
}
