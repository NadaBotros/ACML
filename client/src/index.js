import React from 'react'
import ReactDOM from 'react-dom'
import home from './components/home/home'
import spots from './components/spots/spots'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/spots" component={spots} />
    </Switch>
  </Router>,

  document.getElementById('root')
)

serviceWorker.unregister()
