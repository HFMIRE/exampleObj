// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));