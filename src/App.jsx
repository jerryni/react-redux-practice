import React from 'react'
import './App.css'
import FilterableProductTable from './modules/productList/index.jsx'
import ToDoList from './modules/todoList/index.jsx'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showTable: true
    }
    this.todos = []
  }

  render() {
    return (
      <div id="app">
        {
          this.state.showTable ? (
            <FilterableProductTable />
          ) : (
            <ToDoList todos={this.todos}/>
          )
        }
      </div>
    )
  }
}

export default App
