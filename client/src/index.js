import React from 'react'
import ReactDOM from 'react-dom'
import home from './components/home/home'
import spots from './components/spots/spots'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'
import maps from './components/maps/maps'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/spots" component={spots} />
      <Route exact path="/spots/maps/:long/:lat" component={maps} />
    </Switch>
  </Router>,

  document.getElementById('root')
)

serviceWorker.unregister()
