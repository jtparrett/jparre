import React from 'react'
import styled from 'styled-components'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import {withState} from 'recompose'

import Button from '../../atoms/Button'
import Select from '../../atoms/Select'
import Loader from '../../atoms/Loader'
import Typography from '../../atoms/Typography'

const Form = styled.form`
  display: flex;
  padding: 0 20px;
`

const SizeChart = styled.img`
  width: 100%;
  margin-top: 20px;
  display: block;
`

const SizeChartLink = styled(Typography)`
  align-self: center;
  margin-left: 10px;
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

const View = ({product, sizeChartOpen, sizeChartToggle}) => (
  <Mutation mutation={ADD_LINE_ITEM}>
    {(checkout, {error, loading, data}) => {
      
      if(error) return (<p>Error checking out</p>)

      if(loading) return (<Loader />)

      if(data){
        window.location.replace(data.checkoutCreate.checkout.webUrl)
        return (<Loader />)
      }

      const sizeChartImg = product.images.edges[1]

      return (
        <React.Fragment>
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
              {product.variants.edges.map(({node}) => (
                <option value={node.id} disabled={!node.availableForSale} key={node.id}>{node.title} {!node.availableForSale && '- Sold Out'}</option>
              ))}
            </Select>

            <Button type="submit">Purchase</Button>

            {sizeChartImg &&
              <SizeChartLink 
                onClick={(e) => {
                  e.preventDefault()
                  sizeChartToggle(!sizeChartOpen)
                }} 
                href="#"
                Component="a">
                  (View size chart)
              </SizeChartLink>
            }
          </Form>


          {(sizeChartImg && sizeChartOpen) &&
            <SizeChart src={sizeChartImg.node.transformedSrc} alt="size chart" />
          }
        </React.Fragment>
      )
    }}
  </Mutation>
)

export default withState('sizeChartOpen', 'sizeChartToggle', false)(View)