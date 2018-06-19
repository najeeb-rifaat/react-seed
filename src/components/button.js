import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.title}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

