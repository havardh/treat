import React from 'react'
import { Link } from 'react-router'

import Store from '../store/store'

export default class Day extends React.Component {
  render () {
    const { date } = this.props.params

    const meals = Store.list(date);

    return (
      <div>
        <p><Link to={`day/${date}/meal`}>+</Link></p>

        <ul>
          {meals.map(({name, feal}, i) => (
            <li key={i}>
              {name} - {feal}
            </li>
          ))}
        </ul>

      </div>
    )
  }
}
