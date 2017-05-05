import React from 'react'

import CarouselImage from '../components/carousel-image'
import CarouselVideo from '../components/carousel-video'

export default
  [() => (<CarouselImage src={ [require('images/banner-12.jpg')] } />),
  () => (<CarouselImage src={ [require('images/banner-9.jpg'), require('images/banner-10.jpg'), require('images/banner-11.jpg')] } />), 
  () => (<CarouselImage src={ [require('images/banner-1.jpg'), require('images/banner-2.jpg')] } />), 
  active => (<CarouselVideo active={active} src={ 'video-1' } />), 
  () => (<CarouselImage src={ [require('images/banner-3.jpg'), require('images/banner-4.jpg'), require('images/banner-5.jpg')] } />), 
  active => (<CarouselVideo active={active} src={ 'video-2' } />), 
  () => (<CarouselImage src={ [require('images/banner-6.jpg'), require('images/banner-7.jpg')] } />), 
  active => (<CarouselVideo active={active} src={ 'video-3' } />)]