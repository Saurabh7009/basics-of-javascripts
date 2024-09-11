//JavaScript Errors

// Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.


// The try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// The JavaScript statements try and catch come in pairs:

// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }

//The throw statement allows you to create a custom error.

//The exception can be a JavaScript String, a Number, a Boolean or an Object:
// throw "Too big";    // throw a text
// throw 500;          // throw a number

console.log('check if the number is greater than 5 and less than 10')
let num=prompt("enter the number")

function number(num){
    try {
        if(num>5&&num<10){
            console.log("number is valid")
        }

        if(num===NaN){
            throw new Error("enter valid number"); // it creates an new object error
            
        }



        
    } catch (error) {  // error has two properties 1st message and 2nd is name where all the errors are stored which is catched from try block
        console.log("Error :"+ error.message )
    }
}

a=number(num) // my code its funny but everything has a start

// console.log('Check if the number is greater than 5 and less than 10');

// let num = prompt("Enter the number");

// function checkNumber(num) {
//     try {
//         // Convert the input to a number
//         num = parseFloat(num);
        
//         // If input is not a number, throw an error
//         if (isNaN(num)) {
//             throw new Error("Input is not a valid number");
//         }

//         // Check if number is between 5 and 10
//         if (num > 5 && num < 10) {
//             console.log("The number is greater than 5 and less than 10");
//         } else {
//             // If number is not in range, throw an error
//             throw new Error("Number is not in the required range (greater than 5 and less than 10)");
//         }
//     } catch (error) {
//         // Catch the error and print the message
//         console.log("Error: " + error.message);
//     }
// }

// checkNumber(num);

//The finally Statement

// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }
//   finally {
//     Block of code to be executed regardless of the try / catch result
//   }

console.log('check if the number is greater than 5 and less than 10')
let num1=prompt("enter the number")

function number(num){
    try {
        if(num>5&&num<10){
            console.log("number is valid")
        }

        if(num===NaN){
            throw new Error("enter valid number"); // it creates an new object error
            
        }



        
    } catch (error) {  // error has two properties 1st message and 2nd is name where all the errors are stored which is catched from try block
        console.log("Error :"+ error.message )
    }

    finally{
        console.log("Please Dont Leave Blank Spaces")
    }
}

a=number(num1)

//// error has two properties 1st message and 2nd is name where all the errors 
//are stored which is catched from try block

//Error Name Values
//total 6 errors name
// EvalError	An error has occurred in the eval() function
// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred
// URIError	An error in encodeURI() has occurred


