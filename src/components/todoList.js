import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ol>
          {
            this.props.todoList.map(thisTodo =>
              <li
                key={thisTodo.id}
                onClick={(event) => this.props.onClick(event, thisTodo.id)}
              >
                {thisTodo.value}
              </li>
            )
          }
        </ol>
      </div>
    )
  }
}

TodoList.propTypes = {
  onClick: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired
}

