import React from 'react'
import { IndexLink, Link } from 'react-router'

import 'stylesheets/components/custom-select'

export default class CustomSelect extends React.Component {
  render() {
    return (
      <div className="custom-select">
        <select {...this.props}>
          { this.props.children }
        </select>
      </div>
    );
  }
}