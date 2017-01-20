import React from 'react'
import ShopifyBuy from 'shopify-buy'

export const Client = ShopifyBuy.buildClient({
  apiKey: '097bcf0fe0a8fd7acf38969a1dbc2038',
  domain: 'j-parre.myshopify.com',
  appId: '6'
})