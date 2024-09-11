// javascript destructuring
//Destructuring can be used with any iterables.
//The destructuring assignment syntax unpack object properties into variables:

let person={firstName:"saurabh",lastName:"jadhav"}
let {firstName, lastName} = person; // the variables destructured in the object format
console.log(firstName,lastName)

//Destructuring is not destructive.

//Destructuring does not change the original object.

//destructuring object default values

// const person1 = {
//     firstName1: "John",
//     lastName1: "Doe",
//     age: 50
//   };

//destructuring an object convert properties into variables

// let {firstName1,lastName1,country='usa'}=person1; //For potentially missing properties we can set default values:
// console.log(firstName1,lastName1,country)

//Object Property Alias
const person1 = {
    firstName1: "John",
    lastName1: "Doe",
    age: 50
  };

let {firstName1:name1,lastName1:name2}=person1; // either calling firstname we call name1 for it
console.log(name1,name2)

//// Create a String
let name = "W3Schools";

let[a1,a2,a3,a4]=name;  // for destructuring the string we use array format[]
console.log(a1,a2)

//Array Destructuring

//We can pick up array variables into our own variables:
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, fruit2] = fruits;

// we can skip the values of array while destructuring the array

let [fruit_1,,,fruit_2] = fruits;  // here oranges and apples are skipped bcoz of two extra ","
console.log(fruit_1,fruit_2)


const fru=['banana','apple','mango','cherry'];
const{[0]:fru1,[1]:fru2}=fru; // array is object and while destructuring the array it stores 
                            //index postion as key : either calling it by key we calling it through alias fru1
console.log(fru1,fru2)


//rest property

// You can end a destructuring syntax with a rest property.

// This syntax will store all remaining values into a new array:

// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers

console.log(a,b,rest)

// destructuring an map

// Create a Map
const fruites = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

const[ke,val]=fruites;
console.log(ke,val)
let text=''
for (const[ke,val] of fruites){ //
    text=text+"key"+` ${ke}`+"  val"+`${val}\n`
}
console.log(text)

//Swapping JavaScript Variables

// let firstName2= "John";
// let lastName2 = "Doe";

// let{lastname3,firstname3}={firstName2,lastName2};
// console.log(firstname3,lastname3);

//Object Property Names: Object destructuring matches property names in the object 
//to variable names. If the property names don’t match, the variables will end up being undefined.
//refer chatgpt

//Array destructuring is the recommended and cleanest method for swapping values 
//because it doesn’t rely on property names and directly handles the values:


let firstName2= "John";
let lastName2 = "Doe";

[firstname3,lastname3]=[lastName2,firstName2]
console.log(firstname3,lastname3)







