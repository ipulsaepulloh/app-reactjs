import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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
    this.setState(prevState => ({
      todos: prevState.todos.concat({ text: this.state.todo, done: false }),
      todo: ""

    }))
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
        <img src={logo} alt="Logo React" className="App-logo" />
        <div id="todo" className="header">
          <h1>Todo List </h1>
          <input onChange={this.onChange} value={this.state.todo} type="text" id="input" placeholder="Input  Activity" />
          <form onClick={this.onSubmit} className="addBtn">Add</form>
        </div>

        <ul>
          {
            this.state.todos.map((todo, i) => (
              <li key={i}><form onClick={() => this.finishTodo(i)} style={{ textDecoration: todo.done && 'line-through' }}>{todo.text}</form>
                <span onClick={() => this.deleteTodo(i)} className="delBtn">x</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;