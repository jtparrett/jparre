import React from 'react'

import CarouselImage from '../components/carousel-image'
import CarouselVideo from '../components/carousel-video'

export function CarouselData() {
  return [() => {
    return (<CarouselImage src={ ['/assets/images/IMG_2630.JPG', '/assets/images/IMG_2631.JPG'] } />)
  }, () => {
    return (<CarouselVideo src="https://www.facebook.com/JParreApparel/videos/593954704148136" />)
  }, () => {
    return (<CarouselImage src={ ['/assets/images/IMG_1804.JPG', '/assets/images/IMG_3023.JPG', '/assets/images/IMG_6815.JPG'] } />)
  }, () => {
    return (<CarouselVideo src="https://www.facebook.com/JParreApparel/videos/593000240910249/" />)
  }, () => {
    return (<CarouselVideo src="https://www.facebook.com/JParreApparel/videos/566298463580427/" />)
  }]
}