import React from 'react'
import './App.css'
import FilterableProductTable from './modules/FilterableProductTable.jsx'
import ToDoList from './modules/ToDoList.jsx'

class App extends React.Component {
  state = {
    currentComponent: 'FilterableProductTable'
  }

  components = {
    FilterableProductTable: FilterableProductTable,
    ToDoList: ToDoList
  }

  handleDemoClick(componentName) {
    this.setState({
      currentComponent: componentName
    })
  }
  render() {
    let lis = [],
      CurrentComponent

    CurrentComponent = this.components[this.state.currentComponent]

    Object.keys(this.components).forEach((componentName) => {
      let name

      name = this.state.currentComponent === componentName ? 
        (<span style={{color:'green'}}>
          {componentName}
        </span>) : componentName

      lis.push(
          <li
            onClick={this.handleDemoClick.bind(this, componentName)}
            key={componentName}>{name}</li>
      )
    })

    return (
      <div id="app">
        <h1>Demos</h1>
        <ul>
          {lis}
        </ul>
        <CurrentComponent />
      </div>
    )
  }
}

export default App
