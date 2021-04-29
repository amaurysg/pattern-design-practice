//PATTERN FACTORY METHOD 

class Food {
  preparar() {
    console.log('comida prerada')
  }
}

// Concret products
class Hamburguesa extends Food {
  constructor() {
    console.log('--->Nueva hamburguesa creada')

    //con super tenermos todas las propiedas de la clase Food
    super()
    //heredamos preparar de Food
    this.preparar();

  }
  //podemos agregar a methodo preparar aún más cosas
  preparar() {
    console.log('preparar rapido')
  }

  //podemos adicionar otros metodos en este caso:
  ponerGarlic() {
    console.log('--->Garlic add')
  }

}



// other Concret Product

class Pizza extends Food {
  constructor() {
    console.log('--->Nuevo Pizza')
    //con super tenermos todas las propiedas de la clase Food
    super();
    //heredamos preparar de Food
    this.preparar();

  }
}

//Clase factory

class CocinaFactory {
  constructor(tipo) {

    switch (tipo) {
      case 'hamburguesa':

        return new Hamburguesa()
      case 'pizza':

        return new Pizza()

      default:
        return null
    }

  }

}

const hamburguesa = new CocinaFactory('hamburguesa')
const pizza = new CocinaFactory('pizza')
hamburguesa.ponerGarlic()

