import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Project1 from './project/project1/Project1'
import Project2 from './project/project2/Project2'
import Project3 from './project/project3/Project3'
import Project4 from './project/project4/Project4'
import Home from './project/Home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/project1'>
            <Project1 />
          </Route>
          <Route path='/project2'>
            <Project2 />
          </Route>
          <Route path='/project3'>
            <Project3 />
          </Route>
          <Route path='/project4'>
            <Project4 />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;