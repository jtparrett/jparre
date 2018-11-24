import React from 'react'
import styled from 'styled-components'

import Button from '../../atoms/Button'
import Select from '../../atoms/Select'

const Form = styled.form`
  display: flex;
  padding: 0 20px;
`

export default ({variants}) => (
  <Form>
    <Select>
      {variants.map(({node}) => (
        <option key={node.id}>{node.title}</option>
      ))}
    </Select>

    <Button type="submit">Purchase</Button>
  </Form>
)