import React from 'react'

import Store from '../store/store'

export default class Meal extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      name: "",
      time: "",
      feal: "ok",
      ingredients: []
    }
  }

  setName ({target}) {
    this.setState({name: target.value})
  }

  setTime ({target}) {
    this.setState({time: target.value})
  }

  setFeal(feal) {
    this.setState({feal})
  }

  add () {
    var ingredients = this.state.ingredients || []
    ingredients.push("")
    this.setState({ingredients})
  }

  remove (i) {
    var ingredients = this.state.ingredients || []
    ingredients.splice(i, 1)
    this.setState({ingredients})
  }

  set (i, {target}) {
    var ingredients = this.state.ingredients
    ingredients[i] = target.value
    this.setState({ingredients})
  }

  save () {
    const { date } = this.props.params

    Store.add(date, this.state)

    this.props.history.push(`day/${date}`)
  }

  render () {
    return (
      <div>
        <input placeholder={"Navn"}
          onChange={this.setName.bind(this)}
          value={this.state.name}
          /><br />
        <input placeholder={"Tid"}
          onChange={this.setTime.bind(this)}
          value={this.state.time}
          /><br />

        <input
          type="radio"
          name="feal"
          value="bad"
          onClick={this.setFeal.bind(this, "bad")}
        />bad <br />
        <input
          type="radio"
          name="feal"
          value="ok"
          onClick={this.setFeal.bind(this, "bad")}
        />ok <br />
        <input
          type="radio"
          name="feal"
          value="good"
          onClick={this.setFeal.bind(this, "bad")}
        />good <br />

        <ul>
          {(this.state.ingredients || []).map((ingredient, i) => (
            <li key={i}>
              <input value={ingredient} onChange={this.set.bind(this, i)} />
              <button onClick={this.remove.bind(this, i)}>-</button>
            </li>
          ))}
        </ul>
        <button onClick={this.add.bind(this)}>+</button>
        <br />
        <br />
        <button onClick={this.save.bind(this)}>Save</button>
      </div>
    )
  }
}
