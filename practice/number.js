// number object
// let y = new Number(123);
// console.log(y)
// but to advice is not to create the number object

// `JavaScript Integer Accuracy
// JavaScript integers are only accurate up to 15 digits:`

`Integer Precision`
// upto 15 decimals only 
// let x = 999999999999999;
// console.log(x)
// let y = 9999999999999999;  // here the output is different
// console.log(y)

//BIGINT DATATYPE // two ways  to write the bigint type
// let x = 1234567890123456789012345678901234578890n;
// console.log(x)
// let z = BigInt(1234567890123456789012345)
// console.log(z)

// console.log(Number.isInteger(10))
// console.log(Number.isInteger(10.5))

//Number METHODS
//.tostring()
// console.log((123).toString())
// let x = 123;
// console.log(x.toString())
// console.log((123).toString())
// console.log((100 + 23).toString())


//Number() Methods------------convert an variable to an number

console.log(typeof Number("123"))

console.log(Number("10 33"))
console.log(Number("John"))

// The Number() Method Used on Dates
let x= new Date('1970-12-03')
console.log(Number(x))