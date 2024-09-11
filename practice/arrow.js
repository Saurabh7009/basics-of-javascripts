// arrow functions//---refer -----https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/-- ifuwant 


// formal function

object1={
    firstname:"saurabh",
    lastname:"jadhav",
    age:20
}

const myfunc= function(){
    return `hey my name is ${object1.firstname} ${object1.lastname} and my age is ${object1.age}`
}


a=myfunc()
console.log(a)

// if need to write this in an arrow function

//How to Convert a Regular Function to an Arrow Function Easily
// You can follow these three easy steps to convert a regular
// function to an arrow function:

// Replace the function keyword with the variable keyword const
// Add the = symbol after the function name and before the parentheses
// Add the => symbol after the parentheses

const abc=()=>{
     return`hey my name is ${object1.firstname} ${object1.lastname} and my age is ${object1.age}`
}

b=abc()
console.log(b)

//When you have exactly one parameter, you can also remove the parentheses:
//For single-line functions, the return statement can be implicit
//If your function has no parameter, then you need to pass
// empty parentheses between the assignment and the arrow syntax as shown below
const xyz=()=>`hey my name is ${object1.firstname} ${object1.lastname} and my age is ${object1.age}`
console.log(z=xyz())

//Why Arrow Functions Are Recommended Over Regular Functions

// //You can write short functions in a more straightforward manner
// For single-line functions, the return statement can be implicit
// The this keyword is not bound to the function.

//When using the arrow function syntax, the curly brackets are required only 
// when your function is more than a single line. For example:

const hello=()=>{
    console.log("first"),
    console.log("second")
}

console.log(a=hello())

//When you use arrow functions, 
//only write the return statement explicitly when you have multi-line statements

const sum = (a, b) => {
    const result = a + b;
    return result;
  };

console.log(g=sum(5,10))

//Arrow Functions Don’t Have this Binding




const person={
    name:'saurabh',
    skills:['html','js','css','react'],
    showskills:function (){
        this.skills.forEach(myfunction);
        
            function myfunction(skills){
                console.log(`hello iam ${this.name} and my skills are ${skills}`)

            }
        }
    }

person.showskills()

// here this.name refers to window object and window object dont have any name attributes thats why its undefined
// but why at the very first place it this.name refers to the window object is because

//This happens because regular functions 
// (like the one used as the forEach callback) have their own this context,
//  which is set based on how they are called. Since the forEach method calls
// the function internally without an object reference,
// this refers to the global object)

// now using the arrow function

const person1={
    name:'saurabh',
    skills:['html','js','css','react'],
    showskills:function (){
        this.skills.forEach(myfunction = (skills)=>{
            console.log(`hello iam ${this.name} and my skills are ${skills}`)

        })
        
        }
    }

person1.showskills()

// this.name which is under forEach method 
//Here, the this keyword refers to the object from which the arrow function is defined, which is the person object.
//The arrow function inside showSkills maintains the this context from showSkills, which is the person object.
// This allows it to correctly reference person.name and person.skills even inside the callback function.


//When You Should Not Use Arrow Functions?

// One of these situations is when you define an object method. 
// Back to our person object example above, suppose you write the showSkills() method 
// as an arrow function like this:

const person3 = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills: () => {
      this.skills.forEach(skill => {  //forEach called on undefined it means this.skills is not refering to person object
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person3.showSkills();

  //When you declare an object method using the arrow function, the this keyword refers to the global object,
  // and the skills property is undefined there. Never use the arrow function when declaring a method.