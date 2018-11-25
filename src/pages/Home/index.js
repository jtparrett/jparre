import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../../atoms/Button'
import Video from '../../atoms/Video'
import Spacer from '../../atoms/Spacer'
import VideoFile from '../../assets/video-4.mp4'

export default () => (
  <React.Fragment>
    <Video src={VideoFile} controls />
    <Spacer>
      <Button Component={Link} to="/products">Shop the collection &rarr;</Button>
    </Spacer>
  </React.Fragment>
)