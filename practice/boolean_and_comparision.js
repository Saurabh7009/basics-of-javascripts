// boolean

// You can use the Boolean() function to find out if 
//an expression (or a variable) is true:
console.log(Boolean(10>9))

// evetything with a value is true
// everything without a value is fale 0,null,NaN

// a=new Boolean(10)
// boolean can also be created using object but donot do it slow up speed
//for execution 

//== comparision operater
// let x = false;
// let y = new Boolean(false);

// console.log(x==y)

//=== comparison operater

let x = false;
let y = new Boolean(false);
console.log(x===y)

// boolean and boolean objects cannot be safely comapared


//JavaScript Comparison and Logical Operators
// where we can use comparision operater

// conditional statements
age=20
if(age>18){
    console.log("valid")
}

//logical operaters
// Logical Operators
// Logical operators are used to determine the logic between variables or values.

// Given that x = 6 and y = 3, the table below explains the logical operators:

// &&,||,!

// Operator	Description	Example	Try it
// &&	         and	   (x < 10 && y > 1) is true	
// ||	         or	       (x == 5 || y == 5) is false	
// !	         not	   !(x == y) is true

//Conditional (Ternary) Operator

//variablename = (condition) ? value1:value2 

let vote=(age>18)? "voteable":"notvotable"
console.log(vote)

//The Nullish Coalescing Operator (??)

// The ?? operator returns the first argument if it is not nullish (null or undefined).

// Otherwise it returns the second argument
let name1=null
let name="wow"

let name2=name1??name
console.log(name2)
