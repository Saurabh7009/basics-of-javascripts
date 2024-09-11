// switch()
// The JavaScript Switch Statement

//This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
// let day;
// switch(new Date().getDay()){
//     case 0:
//         day='sunday';
//         break;
//     case 1:
//         day='monday';
//         break;
//     case 3:
//         day='tuesday';
//         break;
//     case 4:
//         day='wednesday';
//         break;
//     case 5:
//         day='thursday';
//         break;
//     case 6:
//         day='friday';
//         break;
//     case 7:
//         day='saturday';
//         break;
//     default:
//         day='write something sensible'


// }
//  console.log(day)

 // When JavaScript reaches a break keyword, it breaks out of the switch block.

// This will stop the execution inside the switch block.

// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

//default keyword
// The default keyword specifies the code to run if there is no case match:

// Common Code Blocks
// Sometimes you will want different switch cases to use the same code.

// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:


// let day;
// switch(new Date().getDay()){
//     case 0:
//     case 6:
//     day='it is weekwend'
//     break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     day='its a weekday, waiting for weekend'
//     break;
// }

// console.log(day)

//Strict Comparison
// Switch cases use strict comparison (===).

// The values must be of the same type to match.

// A strict comparison can only be true if the operands are of the same type.

// In this example there will be no match for x:

// let x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }

//-------------------------------------------------------forloop---------------------------------------------

// Loops can execute a block of code a number of times.
//for (expression 1; expression 2; expression 3) {
  // code block to be executed
//}

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// text=''
// for(let i=0;i<4;i++){
//     text=text+cars[i]+","
// }
// console.log(text)

// Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).

//This is not always the case. JavaScript doesn't care. Expression 1 is optional.

// And you can omit expression 1 (like when your values are set before the loop starts):
// let i=0;
//  const cars = ["BMW", "Volvo", "Saab", "Ford"];
// text=''
// for(;i<4;i++){
//     text=text+cars[i]+","
// }
// console.log(text)

//Expression 2
//Expression 2
// Often expression 2 is used to evaluate the condition of the initial variable.

// This is not always the case. JavaScript doesn't care. Expression 2 is also optional.

// If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.


//expression 3

// Often expression 3 increments the value of the initial variable.

// This is not always the case. JavaScript doesn't care. Expression 3 is optional.

// Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

// Expression 3 can also be omitted (like when you increment your values inside the loop):

// let i = 0;
// debugger;
// let len = cars.length;
// let text = "";
// for (; i < len; ) {
//   text += cars[i] + "<br>";
//   i++;
// }
// console.log(text)

// loop scope for variables var and let

// var i=0;
// console.log(i)// here the i=0
// for (i=0;i<10;i++){
//      console.log(i); // i=10
// }

// console.log(i) // i=10
//------------------------------------------let variable------------------------------------
// let i=0;
// console.log(i)// here the i=0
// for (let i=0;i<10;i++){
//      console.log(i); // i=10
// }

// console.log(i) // i=0


//The For In Loop
//The JavaScript for in statement loops through the properties of an Object:-----------
// const person = {fname:"John", lname:"Doe", age:25};
// text=''
// for (let p in person){  // for in will give the index of the object so to access the object value obj[keyindex]
//     text=text+person[p]+','
// }
// console.log(text)

// for in over arrays--------------

// let arr=[10,20,30,40,50];
// for(va in arr){
//     console.log(arr[va])
// }

// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

//--------------------------------------for of---------------------------------------------------

//The JavaScript for of statement loops through the values of an iterable object.

//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) { //for of looping through the values
  text += x;
}

console.log(text)

//--------------------looping through the string------

let language = "JavaScript";
text=''
for(lan of language){
    text=text+lan+","
}
console.log(text)

//---------------------JavaScript While Loop-------------------------------

//The while loop loops through a block of code as long as a specified condition is true

//In the following example, the code in the loop will run, over and over again, 
//as long as a variable (i) is less than 10:

//If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
let i=0;
while(i<10){
    
    console.log(i)
    i++;
}

//--------dowhile loop--------------------------------


let user="hello iam saurabh"
do{
    console.log(user)
}
   
while(user!=="hello iam saurabh");
    console.log("user is unknown")


// The code you've provided has a structure issue. Specifically, in a do...while loop,
//  the condition is checked after the block is executed. Since the condition user !== "hello iam saurabh"
//   will always be false from the beginning
//  (because the user is already set to "hello iam saurab"), 
//  the while loop won't execute the second console.log() at all.


//----------break and continue statements --------refer w3 schools------------

//------------------iterables----------------------------------------- refer notion----------


