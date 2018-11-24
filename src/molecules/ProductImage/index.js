import React from 'react'

import SquareImage from '../../atoms/SquareImage'

export default ({product}) => (
  <SquareImage 
    src={product.images.edges[0].node.transformedSrc}
    alt={product.title} />
)