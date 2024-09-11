// Math.random()
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

console.log(Math.random())
console.log(// Returns a random integer from 0 to 9:
    Math.floor(Math.random() * 10))// florr rounded to its nearset integer 

// Returns a random integer from 0 to 99:
console.log(Math.floor(Math.random() * 100))

// A Proper Random Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
let b=getRndInteger(1,10)
console.log(b)