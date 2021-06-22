// this keyword 
// how do access a object
const bmw = {
    brand: "BMW",
    model:"O3",
    displayModel(owner, year) {
        console.log(`${owner}: ${this.brand} ${this.model} ${year}`); 

    }, 
}
 
// How to call the  displayModel method?

// What about wanting to make this method reusable?  - I want to apply all future object 

// new objects

// Call method
 //how call we apply new method on the object? 

 // What the shortcoming of this method?  - 

 // What is another we can pass through the array into the call method? - using array 

  //Apply method 

//   Bind method:

// Partial application w/bind