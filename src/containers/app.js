import React, {
  Component
} from 'react'

import {
  Math,
  Constants
} from '../utils'

import {
  Input,
  TodoList
} from '../components'

import style from './app.css'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todoList: []
    }

    this.math = new Math()
    this.onEnterKey = this.onEnterKey.bind(this)
    this.onTodoEntryClick = this.onTodoEntryClick.bind(this)
  }

  render () {
    return (
      <div className={style.app} >
        <Input
          onKeyPress={this.onEnterKey}
          placeHolder='Write ToDo here'
        />
        <TodoList
          todoList={this.state.todoList}
          onClick={this.onTodoEntryClick}
        />
      </div>
    )
  }

  onTodoEntryClick (event, id) {
    event.preventDefault()
    this.setState(
      Object.assign(
        ...this.state,
        {
          todoList: [
            ...this.state.todoList
              .filter(thisTodo => thisTodo.id !== id)
          ]
        }
      )
    )
  }

  onEnterKey (event, input) {
    if (event.key === Constants.keys.enter) {
      this.setState(
        Object.assign(
          ...this.state,
          {
            todoList: [
              ...this.state.todoList,
              {
                id: (`ToDo_${this.math.inc(this.state.todoList.length)}`),
                value: input.value
              }
            ]
          }
        )
      )
      // reset input
      input.value = ''
    }
  }
}

