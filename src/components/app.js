import React from 'react'
import { hashHistory } from 'react-router'

import { Button } from 'react-bootstrap'

import Calendar from './calendar'
import Day from './day'
import Meal from './meal'

export default class App extends React.Component {
  render () {

    return (
      <div>
        { this &&
          <Button onClick={() => hashHistory.goBack()}>
            {"<"}
          </Button>
        }
        <h1>treat</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}
