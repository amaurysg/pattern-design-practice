console.log('hola')

// PATRÓN BUILDER

//No es optimo  crear cada objeto de esta manera O instanciar
// const pizzaBacon = new PizzBacon()
// const pizzaJamon = new PizzJamon()


//create main class

class Pizza {

  //constructor with params
  constructor(tomato, cheese, garlic, pineapple, baconStrips, otherIngredients) {

    //default values
    this.tomato = false
    this.cheese = false
    this.garlic = false
    this.pineapple = 0
    this.baconStrips = 0
    this.otherIngredients = []

  }

  //APLY PATRÓN BUILDER 
  //INSIDE OF THIS CLASS EVERYTHING

  setTomato() {
    this.tomato = true
    return this
  }
  setCheese() {
    this.cheese = true
    return this
  }
  setGarlic() {
    this.garlic = true
    return this
  }
  setPineapple(slices) {
    this.pineapple = slices
    return this
  }
  setBaconStrips(strips) {
    this.baconStrips = strips
    return this
  }
  addOtherIngredients(ingredient) {
    this.otherIngredients.push(ingredient)
    return this
  }

  //build 

  build() {
    return {
      tomato: this.tomato,
      cheese: this.cheese,
      garlic: this.garlic,
      pineapple: this.pineapple,
      baconStrips: this.baconStrips,
      otherIngredients: this.otherIngredients

    }
  }


}

// const pizza = new Pizza(true, true, true, 3, 4, ['peperoni', 'jamon'])

const pizza = new Pizza().build()

const pizzaGarlic = new Pizza().setGarlic().setPineapple(3).build()

const pizzaHard = new Pizza().setGarlic().setBaconStrips(12).setCheese().addOtherIngredients('Tocino').build()


// console.log(pizza)
// console.log(pizzaGarlic)

console.log(pizzaHard)





