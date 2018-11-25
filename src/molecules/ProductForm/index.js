import React from 'react'
import styled from 'styled-components'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

import Button from '../../atoms/Button'
import Select from '../../atoms/Select'
import Loader from '../../atoms/Loader'

const Form = styled.form`
  display: flex;
  padding: 0 20px;
`

const ADD_LINE_ITEM = gql`
  mutation($input:CheckoutCreateInput!){
    checkoutCreate(input:$input) {
      checkout {
       webUrl
      }
    }
  }
`

export default ({variants}) => (
  <Mutation mutation={ADD_LINE_ITEM}>
    {(checkout, {error, loading, data}) => {
      
      if(error) return (<p>Error checking out</p>)

      if(loading) return (<Loader />)

      if(data){
        window.location.replace(data.checkoutCreate.checkout.webUrl)
        return (<Loader />)
      }

      return (
        <Form onSubmit={(e) => {
          e.preventDefault()
          checkout({
            variables: {
              input: {
                lineItems: [{
                  quantity: 1,
                  variantId: e.target.variant.value
                }]
              }
            }
          })
        }}>
          <Select name="variant">
            {variants.map(({node}) => (
              <option value={node.id} disabled={!node.availableForSale} key={node.id}>{node.title}</option>
            ))}
          </Select>

          <Button type="submit">Purchase</Button>
        </Form>
      )
    }}
  </Mutation>
)