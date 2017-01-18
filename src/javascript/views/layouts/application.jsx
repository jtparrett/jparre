import React from 'react'

import Header from '../../components/header';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          { this.props.children }
        </main>
      </div>
    );
  }
}
