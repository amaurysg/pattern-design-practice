
//PATRON SINGLETON 

class Office {

  //  static instance  //undefined
  //  name = ''
  //  employees = ''
  //this code is optional 

  constructor(name, employees) {
    this.name = name
    this.employees = employees

    if (typeof Office.instance === "object") {
      return Office.instance

    }

    Office.instance = this
    return this

  }
}


const office1 = new Office('Oficina principal', 100)
const office2 = new Office('Oficina second', 50)

//En este caso habrá una unica instancia, asignada en office1
console.log(office1)
console.log(office2)

//Office { name: 'Oficina principal', employees: 100 }
//Office { name: 'Oficina principal', employees: 100 }


