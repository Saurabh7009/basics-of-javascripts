// The Math Object
// Unlike other objects, the Math object has no constructor.

// The Math object is static.

// All methods and properties can be used without creating a Math object first.

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

console.log(Math.round(4.6))
console.log(Math.trunc(4.9))

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:

console.log(Math.pow(2,8))


// Math.abs(x) returns the absolute (positive) value of x:

console.log(Math.abs(-4.7))

//Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:

console.log(Math.min(0, 150, 30, 20, -8, -200))
console.log(Math.max(0, 150, 30, 20, -8, -200))

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random())