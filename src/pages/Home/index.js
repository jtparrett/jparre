import React from 'react'
import { Link } from 'react-router-dom'

import Meta from '../../atoms/Meta'
import Button from '../../atoms/Button'
import Container from '../../atoms/Container'
import Video from '../../atoms/Video'
import Spacer from '../../atoms/Spacer'

export default () => (
  <>
    <Meta>
      <title>Home</title>
    </Meta>
    <Container slim>
      <Video src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FJParreApparel%2Fvideos%2F907578606119076%2F&show_text=0" />
    </Container>
    <Spacer>
      <Button Component={Link} to="/products">Shop the collection &rarr;</Button>
    </Spacer>
  </>
)