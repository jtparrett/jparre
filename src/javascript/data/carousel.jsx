import React from 'react'

import CarouselImage from '../components/carousel-image'
import CarouselVideo from '../components/carousel-video'

import Banner1 from 'images/banner-1.jpg'
import Banner2 from 'images/banner-2.jpg'
import Banner3 from 'images/banner-3.jpg'
import Banner4 from 'images/banner-4.jpg'
import Banner5 from 'images/banner-5.jpg'
import Banner6 from 'images/banner-6.jpg'
import Banner7 from 'images/banner-7.jpg'
import Banner8 from 'images/banner-8.jpg'
import Banner9 from 'images/banner-9.jpg'
import Banner10 from 'images/banner-10.jpg'
import Banner11 from 'images/banner-11.jpg'
import Banner12 from 'images/banner-12.jpg'

import Video1 from 'videos/video-1.mp4'
import Video2 from 'videos/video-2.mp4'
import Video3 from 'videos/video-3.mp4'

export default
  [() => (<CarouselImage src={ [Banner12] } />),
  () => (<CarouselImage src={ [Banner9, Banner10, Banner11] } />), 
  () => (<CarouselImage src={ [Banner1, Banner2] } />), 
  active => (<CarouselVideo active={active} src={ Video1 } />), 
  () => (<CarouselImage src={ [Banner3, Banner4, Banner5] } />), 
  active => (<CarouselVideo active={active} src={ Video2 } />), 
  () => (<CarouselImage src={ [Banner6, Banner7] } />), 
  active => (<CarouselVideo active={active} src={ Video3 } />)]