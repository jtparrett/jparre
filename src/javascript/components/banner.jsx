import React from 'react'
import { Link } from 'react-router'

import 'images/box-logo.svg'

import 'stylesheets/components/banner'

export default class Banner extends React.Component {
  render() {
    return (
      <section role="banner" className="banner">
        <Link to="/" class="banner__logo">
          <img src='/assets/images/box-logo.svg' />
        </Link>
      </section>
    );
  }
}
