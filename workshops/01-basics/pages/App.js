import { Component } from 'react'

import TodoList from './TodoList'
import { TextBox } from './FormWidgets'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      nowIndex: 0
    }
    this.handleChangeCompleted = this.handleChangeCompleted.bind(this)
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this)
  }

  handleChangeCompleted(id) {
    for (let item of this.state.todos) {
      if (item.id === id) 
        item.completed = true
      break
    }
  }

  handleSubmitTodo(e) {
    if (e.keyCode === 13) {
      const value = e.target.value
      this.setState([
        ...this.state.todos,
        {
          id: this.state.nowIndex,
          title: value,
          completed: false
        },
        nowIndex++
      ])
    }
  }
  
  render() {
    return (
      <div>
        <TextBox onKeyUp={this.handleSubmitTodo}/>
        <TodoList handleChangeCompleted={this.handleChangeCompleted} todos={this.state.todos} />
      </div>
    )
  }
}