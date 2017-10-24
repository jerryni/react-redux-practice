import React from 'react'
import './App.css'
import FilterableProductTable from './modules/FilterableProductTable.jsx'
import ToDoList from './modules/ToDoList.jsx'

class App extends React.Component {
  state = {
    showTable: true
  }
  todos = []
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
