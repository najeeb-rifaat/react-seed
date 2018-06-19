import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let input // ref to this input to be used for events

    return (
      <input
        ref={node => { input = node }}
        type={this.props.type || 'text'}
        onKeyPress={
          (event) =>
            this.props.onKeyPress(event, input)
        }
        placeholder={this.props.placeHolder || 'placeholder'}
      />
    )
  }

}

Input.propTypes = {
  type: PropTypes.string,
  placeHolder: PropTypes.string,
  onKeyPress: PropTypes.func.isRequired
}

