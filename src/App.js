import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'

function App () {
  return (
    <Router>
      <div class='app'>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h1>Page Chackout</h1>
          </Route>

          <Route path='/login'>
            <h1>Page Login</h1>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
