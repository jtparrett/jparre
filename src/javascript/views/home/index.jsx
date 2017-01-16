import React from 'react'
import { IndexLink, Link } from 'react-router'

export default class HomeIndex extends React.Component {
  render() {
    return (
      <div>
        This is your Homepage!
        <Link to="products">Products</Link>
      </div>
    );
  }
}
