import React from 'react'

import CarouselImage from '../components/carousel-image'
import CarouselVideo from '../components/carousel-video'

export default
  [() => (<CarouselImage src={ ['banner-12'] } />),
  () => (<CarouselImage src={ ['banner-9', 'banner-10', 'banner-11'] } />), 
  () => (<CarouselImage src={ ['banner-1', 'banner-2'] } />), 
  active => (<CarouselVideo active={active} src={ 'video-1' } />), 
  () => (<CarouselImage src={ ['banner-3', 'banner-4', 'banner-5'] } />), 
  active => (<CarouselVideo active={active} src={ 'video-2' } />), 
  () => (<CarouselImage src={ ['banner-6', 'banner-7'] } />), 
  active => (<CarouselVideo active={active} src={ 'video-3' } />)]