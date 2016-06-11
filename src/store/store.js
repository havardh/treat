class Store {

  constructor() {
    this.days = JSON.parse(localStorage.getItem("days")) || []

  }

  add (date, meal) {
    const meals = this.days[date] || [];

    meals.push(meal)

    this.days[date] = meals

    localStorage.setItem("days", JSON.stringify(this.days))
  }

  list (date) {
    return this.days[date] || []
  }

}

export default new Store()
