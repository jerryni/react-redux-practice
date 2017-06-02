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
        id: new Date().getTime(),
        completed: false
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

  onToggle = todo => {
    todo.completed = !todo.completed
    this.setState(this.state)
  }

  onToggleAll = e => {
    let {checked} = e.target;
    this.props.todos.forEach(todo => {
      todo.completed = checked
    })
    this.setState(this.state)
  }

  render() {
    let {todos} = this.props;

    return (
      <div id="app">
        <h1>todos</h1>
        <input type="checkbox" onChange={this.onToggleAll}/>
        <input type="text"
        onKeyUp={this.handleKeyup}
        onChange={this.handleChange}
        value={this.state.text}/>
        <ul>
          {todos.map( (todo, index) => 
            <li key={todo.id}>
              <label>
              <input type="checkbox" checked={todo.completed}
                onChange={()=> {this.onToggle(todo)}}/>
              {todo.name}
              </label>

              <a href="javascript:;" className="close" onClick={() => {this.handleRemoveTodo(index)}}>X</a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
