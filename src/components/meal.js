import React from 'react'

import {
  Button,
  ButtonGroup
} from 'react-bootstrap';

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

  onKeyPress (event) {
    console.log(event.charCode, event.keyCode)
    if (event.charCode == 13) {
      this.add();
    }
  }

  render () {

    const ifSet = (state, clazz) => this.state.feal === state ? `btn ${clazz}` : "btn"


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

        <ButtonGroup>
          <Button bsClass={ifSet("bad", "btn-danger")} onClick={this.setFeal.bind(this, "bad")}>bad</Button>
          <Button bsClass={ifSet("ok", "btn-warning")} onClick={this.setFeal.bind(this, "ok")}>ok</Button>
          <Button bsClass={ifSet("good", "btn-success")} onClick={this.setFeal.bind(this, "good")}>good</Button>
        </ButtonGroup>

        <ul>
          {(this.state.ingredients || []).map((ingredient, i) => (
            <li key={i}>
              <input
                onKeyPress={i == this.state.ingredients.length - 1 ? this.onKeyPress.bind(this) : () => {}}
                value={ingredient}
                onChange={this.set.bind(this, i)} />

              <Button onClick={this.remove.bind(this, i)}>-</Button>
            </li>
          ))}
        </ul>
        <Button onClick={this.add.bind(this)}>+</Button>
        <br />
        <br />
        <Button onClick={this.save.bind(this)}>Save</Button>
      </div>
    )
  }
}
