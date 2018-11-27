import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../../atoms/Button'
import Container from '../../atoms/Container'
import Video from '../../atoms/Video'
import Spacer from '../../atoms/Spacer'
import VideoFile from '../../assets/video-4.mp4'
import Poster from '../../assets/video-4-poster.jpg'

export default () => (
  <React.Fragment>
    <Container slim>
      <Video poster={Poster} src={VideoFile} controls />
    </Container>
    <Spacer>
      <Button Component={Link} to="/products">Shop the collection &rarr;</Button>
    </Spacer>
  </React.Fragment>
)