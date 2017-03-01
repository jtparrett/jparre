import React from 'react'

import Header from '../../components/header';
import Banner from '../../components/banner';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Banner />
        { this.props.children }
      </div>
    )
  }
}
