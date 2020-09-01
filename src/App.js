import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'

function App () {
  return (
    <Router>
      <div class='app'>
        <Switch>
          <Route path='/checkout'>
            <h1>Page Chackout</h1>
          </Route>

          <Route path='/login'>
            <h1>Page Login</h1>
          </Route>

          <Route path='/'>
            <Header />
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
