import React, { Component } from "react"
import "./App.css"

class App extends Component {
  state = {
    todos: [],
    todo: ""
  }

  onChange = e => {
    this.setState({
      todo: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState(prevState => ({
      todos: prevState.todos.concat({ text: this.state.todo, done: false }),
      todo: ""
    }))
  }

  handleCheckbox = event => {
    const target = event.target
    const name = Number(target.name)

    const newTodos = this.state.todos.map((todo, index) => {
      if (index === name) {
        todo.done = !todo.done
        return todo
      } else {
        return todo
      }
    })

    this.setState({
      todos: newTodos
    })
  }

  finishTodo = i => {
    const updatedTodos = this.state.todos.slice()

    updatedTodos[i].done = true

    this.setState({
      todos: updatedTodos
    })
  }

  deleteTodo = i => {
    const updatedTodos = this.state.todos.slice()

    updatedTodos.splice(i, 1)

    this.setState({
      todos: updatedTodos
    })
  }

  render() {
    return (
      <div className="App">
        <div id="todo" className="header">
          <h1>Todo List App</h1>

          <form onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              value={this.state.todo}
              type="text"
              id="input"
              placeholder="Input  Activity"
              className="todo-input"
            />
            <input type="submit" className="addBtn" value="+" />
          </form>

          <ul>
            {this.state.todos.map((todo, index) => (
              <li key={index}>
                <span style={{ textDecoration: todo.done && "line-through" }}>
                  {todo.text}
                </span>
                <input
                  type="checkbox"
                  name={index}
                  checked={todo.done}
                  onChange={this.handleCheckbox}
                />
                <span onClick={() => this.deleteTodo(index)} className="delBtn">
                  x
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
