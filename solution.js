// Call, Apply and Bind method
// this keyword - always refer to the object  + also refers to the object when the function is called inside it
// unless in the global context - refer to the window.object or is undefined in strict mode

const bmw = {
    brand: "BMW",
    model:"O3",
    // this meth:od : 
    displayModel(owner, year) {

        // needs to this.keyword refer to the properties in the object
        console.log(`${owner}: ${this.brand} ${this.model} ${year}`); 

    }, 
}
//alling object then the method - and invoking the function with parenthesis ()
// undefined beacuse I have passed value for owners name 
console.log(bmw.displayModel())
console.log(bmw.displayModel("Sarah", 1999))

// What about wanting to make this method reusable?  - I want to apply all future object 
// this creates a reference to the object - why does this work is that non-primitive data type - they are store by reference e.g, array 
// this means that store by links which they can be accessed if you have that reference unlike Primitive who store the actual value 
// danger of this - is that can change and mutate the orignal reference value - which is good practice to make copy e.g. array
 const displayCar = bmw.displayModel;
// all new obj need to have the same properties in order for the method to work
 const lambo = {
     brand: "Lamborghini", 
     model: "Huracan"
 }

 const audi = {
    brand: "Audi", 
    model: "R8"
 }

 //how call we apply new method on the object? 
 // this work but how we want it to - because of this keyword - there is no connection to the object 
 // allow this keyword is bound BMW

//  displayCar("Vivian", audi.brand, audi.model)
//  displayCar("Vivian", "Audi", "R8") - not the same as the object 

// Call method - can only take in orginal arguments
// this works because use the call method and specifed the object when we took as first argument 
console.log(displayCar.call(bmw, "Vivian", 2010))
console.log(displayCar.call(lambo, "Aza", 1948))
console.log(displayCar.call(audi, "Fifi", 2020))
console.log(lambo)
//  It can be applied to the bmw  & other objects  - reason why it works 
// What the shortcoming of this method?  - 

const ownerAge2 = ["Meg", 1946]
// What is another we can pass through the array into the call method? - using array 
// using the spread Operator - expands it indivdual pieces 
console.log(displayCar.call(bmw, ...ownerAge2))
// Apply method - can take array of  argument - 

const ownerAge = ["Suzie", 1920]
// passing it through as variable
console.log(displayCar.apply(bmw, ownerAge))

// Bind method: allowes to manual reset the this.keyword for any function call 
//difference is that doesnt immediately call the function 
//-> return a new function where this.keyword is bound

// Setting up this keyword
//  this won't apply to bwm because that is the default this.keyword
// const displayCar = bmw.displayModel;

const displayLambo = displayCar.bind(lambo)
const displayAudi = displayCar.bind(audi)

// can pass the argument straight to variable
console.log(displayLambo("Fatimah", 1879))
console.log(displayAudi("Nat", 1789))

// Partial application w/bind
// can also pass argument when we bind the this keyword to the object - but has to be in the order of the arugments 
// const displayAudi = displayCar.bind(audi, "Grey")
// console.log(displayAudi(2012))