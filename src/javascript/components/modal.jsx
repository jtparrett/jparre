import React from 'react'

import 'stylesheets/components/modal'

export default class Modal extends React.Component {
  render (){
    return (
      <div className="page__main">
        { this.props.children }
        <section className="actions">
          <button className="button" onClick={ this.props.closeEvent }>Close</button>
        </section>
      </div>
    )
  }
}