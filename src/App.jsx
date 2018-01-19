import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import FilterableProductTable from './modules/FilterableProductTable.jsx'
import ToDoList from './modules/ToDoList.jsx'

class App extends React.Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">FilterableProductTable</Link></li>
                    <li><Link to="/todos">ToDoList</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={FilterableProductTable}/>
                <Route path="/todos" component={ToDoList}/>
            </div>
        </Router>
    )
  }
}

export default App
