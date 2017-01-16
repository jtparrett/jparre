import React from 'react'
import { Link } from 'react-router'

// Components
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
