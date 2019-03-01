import React from 'react'

import SquareImage from '../../atoms/SquareImage'

export default ({ images, title }) => (
  <SquareImage
    src={images.edges[0].node.transformedSrc}
    alt={title} />
)