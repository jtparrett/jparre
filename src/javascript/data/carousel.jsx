import React from 'react'

import CarouselImage from '../components/carousel-image'
import CarouselVideo from '../components/carousel-video'

import 'images/banner-1.jpg'
import 'images/banner-2.jpg'
import 'images/banner-3.jpg'
import 'images/banner-4.jpg'
import 'images/banner-5.jpg'
import 'images/banner-6.jpg'
import 'images/banner-7.jpg'
import 'images/banner-8.jpg'
import 'images/banner-9.jpg'
import 'images/banner-10.jpg'
import 'images/banner-11.jpg'

export default
  [() => (<CarouselImage src={ ['/assets/images/banner-9.jpg', '/assets/images/banner-10.jpg', '/assets/images/banner-11.jpg'] } />), 
  () => (<CarouselImage src={ ['/assets/images/banner-1.jpg', '/assets/images/banner-2.jpg'] } />), 
  () => (<CarouselVideo src="https://www.facebook.com/JParreApparel/videos/593954704148136" />), 
  () => (<CarouselImage src={ ['/assets/images/banner-3.jpg', '/assets/images/banner-4.jpg', '/assets/images/banner-5.jpg'] } />), 
  () => (<CarouselVideo src="https://www.facebook.com/JParreApparel/videos/593000240910249" />), 
  () => (<CarouselImage src={ ['/assets/images/banner-6.jpg', '/assets/images/banner-7.jpg'] } />), 
  () => (<CarouselVideo src="https://www.facebook.com/JParreApparel/videos/566298463580427" />), 
  () => (<CarouselImage src={ ['/assets/images/banner-8.jpg'] } />)]