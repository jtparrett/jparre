import React from 'react'

import Header from '../../components/header';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        { this.props.children }
      </div>
    );
  }
}
