import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/app'
import './styles/app.scss'

import Day from './components/day'
import Meal from './components/meal'
import Calendar from './components/calendar'

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Calendar} />

      <Route path="day/:date" component={Day} />
      <Route path="day/:date/meal" component={Meal} />
    </Route>
  </Router>,
  document.getElementById('main')
)
