//create a person object
let person = {
  firstName: 'Alec',
  lastName: 'Prettyman',
  age: 23
}

// console.log(person.firstName)
// console.log(person['lastName'])



//destructuring
let meal = {
  appetizer: 'chips and salsa',
  entree: 'steak and bean burrito',
  dessert: 'fried ice cream',
  drink: 'dr. pepper'
}

// let dessert = meal.dessert
//let bestSodaEver = meal.drink
let {dessert, entree, appetizer, drink: bestSodaEver} = meal

// let {entree, appetizer} = meal

// let {drink: bestSodaEver} = meal

// console.log(dessert + ', ' + entree + ', ' + appetizer)
// console.log(bestSodaEver)
// console.log(meal)




//For in loops
// for(let food in meal){
//   console.log(`For my ${food} I had ${meal[food]}`)
// }



//adding, changing and deleting properties from objects
person.occupation = 'Mentor at Devmountain'
person.age++

delete person.lastName

// console.log(person)




//Classes and extending class
class Pet {
  constructor(name, age){
    this.name = name,
    this.age = age
  }
}

class Dog extends Pet {
  constructor(name, age, breed){
    super(name, age)
    this.breed = breed
  }

  bark(){
    console.log(`Bark, my name is ${this.name}!`)
  }
}

let lassie = new Dog('Lassie', 7, 'Collie')

console.log(lassie)
lassie.bark()

class Cat extends Pet {
  constructor(name, age, color){
    super(name, age)
    this.color = color,
    this.temperment = 'mean'
  }

  beNice() {
    this.temperment = 'nice'
    console.log(`${this.name} is now a nice cat!`)
  }
}

let macy = new Cat('Macy', 2, 'grey')

macy.beNice()
console.log(macy.temperment)