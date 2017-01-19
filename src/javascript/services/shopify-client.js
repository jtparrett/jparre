import React from 'react'
import ShopifyBuy from 'shopify-buy'

export const Client = ShopifyBuy.buildClient({
  apiKey: 'efb407bc17db55849d9b1b9fc8f73128',
  domain: 'j-parre.myshopify.com',
  appId: '6'
})