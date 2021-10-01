// Creating a menu object
const menu = {
  // Adding a private course property to the menu object
  _courses: {
    // created three properties inside the course properties
    appetizers: [],
    mains: [],
    desserts: []
  },
  // Getter and setter methods for the properties of _courses
  get appetizers(){
    return this._courses.appetizers
  },
  set appetizers(val){
    this._courses.appetizers = val
  },
  get mains(){
    return this._courses.mains
  },
  set mains(val){
    this._courses.mains = val
  },
  get desserts(){
    return this._courses.desserts
  },
  set desserts(val){
    this._courses.desserts = val
  },

  // getter method for courses to return the values of its properties
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },

  // Adds a new dish to the specified course on the menu
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    this._courses[courseName].push(dish)
  },

  // returns a random dish from the specified course
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName]
    const rand_index = Math.floor(Math.random() * dishes.length)
    return dishes[rand_index]
  },

  // returns a string of random meals uses the previous method
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const price = appetizer.price + main.price + dessert.price

    return `Appetizer: ${appetizer.name}.. Main: ${main.name}.. Dessert: ${dessert.name}.. Total Price: \$${price} `
  }
}

//////////// Test Cases \\\\\\\\\\\\\\
// Appetizers
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25)
menu.addDishToCourse('appetizers', 'Yam Fries', 8.99)
menu.addDishToCourse('appetizers', 'Bacon Wrapped Jalopeneos', 6.75)

//Mains
menu.addDishToCourse('mains', 'Blackened Chicken', 29.99)
menu.addDishToCourse('mains', 'Honey Glazed Salmon', 22.99)
menu.addDishToCourse('mains', 'Prime Ribs', 24.99)

//Desserts
menu.addDishToCourse('desserts', 'Funnel Cake', 14.25)
menu.addDishToCourse('desserts', 'Cheese Cake', 10.99)
menu.addDishToCourse('desserts', 'Apple Pie', 6.25)

// Log the different courses to the console
console.log(menu.appetizers)
console.log()
console.log(menu.mains)
console.log()
console.log(menu.desserts)
console.log()

// Get a random dish from a course
// -- Appetizer
console.log(menu.getRandomDishFromCourse('appetizers'))
console.log()
// --Main
console.log(menu.getRandomDishFromCourse('mains'))
console.log()
// --Dessert
console.log(menu.getRandomDishFromCourse('desserts'))
console.log()
// Add a dish to course
menu.addDishToCourse('appetizers', 'Mashed Potatoes', 9.99)
console.log(menu.appetizers)
console.log()
// Generate a Random Meal form the meals provided
console.log(menu.generateRandomMeal())
