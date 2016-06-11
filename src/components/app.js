import React from 'react'

import Calendar from './calendar'
import Day from './day'
import Meal from './meal'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>treat</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
