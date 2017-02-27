import React from 'react'

import Header from '../../components/header';
import Footer from '../../components/footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="page">
        <Footer />
        <Header />
        { this.props.children }
      </div>
    )
  }
}
