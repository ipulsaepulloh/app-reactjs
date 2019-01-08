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
      todos: prevState.todos.concat(this.state.todo)
    }))
  }

  render() {

    return (
      <div className="App">
        <img src={logo} alt="Logo React" className="App-logo" />
        <div id="todo" class="header">
          <h1>Todo List </h1>
          <input onChange={this.onChange} value={this.state.todo} type="text" id="input" placeholder="input  activity" />
          <span onClick={this.onSubmit} class="addBtn">Add</span>
        </div>
        {
          this.state.todos.map((todo, i) => (
            <p key={i}>{todo}</p>
          ))
        }
      </div>
    );
  }
}

export default App;