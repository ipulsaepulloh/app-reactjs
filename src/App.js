import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="Logo React" className="App-logo" />
        <div id="todo" class="header">
          <h1>Todo List </h1>
          <input type="text" id="input" placeholder="input  activity" />
          <span onclick="newElement()" class="addBtn">Add</span>
        </div>
      </div>
    );
  }
}

export default App;