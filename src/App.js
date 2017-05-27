import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  static propTypes = {
    todos: PropTypes.array
  }

  state = {
    text: this.props.text || ''
  }

  handleKeyup = e => {
    if(e.key == 'Enter'){
      let value = e.target.value.trim()

      this.props.todos.push({
        name: value,
        id: new Date().getTime()
      })

      this.setState({
        text: ''
      })

      console.log(this.props.todos)
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleRemoveTodo = index => {
    this.props.todos.splice(index, 1)

    this.setState(this.state)
  }

  render() {
    let _todos = this.props.todos;

    return (
      <div id="app">
        <h1>todos</h1>
        <input type="text"
        onKeyUp={this.handleKeyup}
        onChange={this.handleChange}
        value={this.state.text}/>
        <ul>
          {_todos.map( (todo, index) => 
            <li key={todo.id}>{todo.name} <span className="close" onClick={() => {this.handleRemoveTodo(index)}}>X</span></li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
