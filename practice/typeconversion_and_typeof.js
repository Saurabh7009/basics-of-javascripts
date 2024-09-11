//The typeof operator returns the type of a variable or an expression.

// console.log(typeof "John")         // Returns string
// console.log(typeof ("John"+"Doe"), // Returns string
// typeof 3.14,          // Returns number
// typeof 33,             // Returns number
// typeof (33 + 66),      // Returns number
// typeof true,           // Returns boolean
// typeof false,          // Returns boolean
// typeof 1234n,          // Returns bigint
// typeof Symbol(),       // Returns symbol
// typeof x);

// console.log(typeof null);

// //null returns an object

// console.log(typeof {name:'John'},  // Returns object
// typeof [1,2,3,4],       // Returns object
// typeof new Map(),      // Returns object
// typeof new Set(),      // Returns object

// typeof function (){})  // Returns function

//how to recognize something the specific object

//use instance of ongotpointercapture

const arr1=[10,20,30,40,50,60]

console.log((arr1 instanceof Array));


// type of for undenfined variable

let car;
console.log(typeof car);

//Any variable can be emptied, by setting the value to undefined.

//The type will also be undefined.

let rest='dining'
rest=undefined

console.log(rest)

//Key Differences:
// Assignment: undefined is typically assigned by JavaScript 
// when a variable is declared but not initialized. null is manually 
// assigned to indicate the intentional absence of a value.
// Type: undefined is of type undefined, while null is of type object.
// Usage: Use undefined when something hasn't been initialized,
// and use null when you want to intentionally clear or reset a value.

// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

// Unfortunately, in JavaScript, the data type of null is an object.

// You can empty an object by setting it to null:

let person={a:"hello",b:"saurabh"}
console.log(person)
person=null
console.log(person)


// The constructor Property
// The constructor property returns the constructor function for all JavaScript variables.

// const a=new Array()
// console.log(a.constructor)
// // with the help of constructor you can also check the datattype
// console.log(a.constructor===Array)


//void operater

// The void operator evaluates an expression and returns undefined.
//  This operator is often used to obtain the undefined primitive value, 
// using "void(0)" (useful when evaluating an expression without using the return value).

//When you use the void operator with any expression, it evaluates the expression but doesn't care about its outcome.
//Instead of returning the actual result of the expression, it always returns undefined.

//Converting Strings to Numbers using Number 

console.log(Number("3.14"),
Number(Math.PI),
Number(" "),
Number(""))

//this will not convert
console.log(Number("99 88"),
Number("John"))

//The Unary + Operator

// let y = "5";      // y is a string
// let x = + y;      // x is a number

// console.log(typeof x) // number

let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)

// console.log(x) value will be NaN but datatype will be Number


//Converting Dates to Numbers

let a= new Date()
console.log(Number(a))

//Converting Booleans to Numbers

let b=false
console.log(Number(b))

b=true
console.log(Number(b))

//Automatic String Conversion

//JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable
// on html page:

//document.getElementById("demo").innerHTML = myVar

let obj={person:'saurabh',age:'26'}

console.log(obj)


