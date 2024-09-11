// // console.log("iam cristiano")

// // function circle(radius){
// //     return 2*3.14*radius
// // }

// // let x =circle() //Accessing a function with incorrect parameters can return an incorrect answer:
// // console.log(x + " Area Of Circle")


// // function bicyclekick(lengthoflegs){
// //     return 2*lengthoflegs
// // }

// // let x=bicyclekick // if i just passed the object it will give me overall function 
// // console.log(x)

// // Creating an Object

// // Object Look Like this {key:value}  // and those keys are called properties of that object

// // method is a property value returing in a format of function

// // const person={firstname:'Saurabh',lastname:"jadhav",rollno:21,age:20,

// //     fullname:function(){return this.firstname + this.lastname} // so this is the object format for method and the method name is "fullname"
// // } // this refers to object which is person



// // //access the objects properties

// // console.log(person.age)

// // console.log(person['age'])

// // let x= "age"
// // let y= "rollno"  //through variables

// // console.log(person[x]+" age "+person[y]+" rollno")


// // //delete the objects

// // delete person['rollno'] // rollno is deleted its not just the value the overall key:value pair is deleted

// // console.log(person)


// //nested objects

// // const cars={brand:"chervelot",
// //         cmy:{avia:2014,captiva:2018,beat:2020}
// // }

// // access the nested objects

// // console.log(cars['brand'])

// // console.log(cars['cmy']['avia'])

// // console.log(cars.cmy.avia)

// // print the whole object keys
// // text=""
// // for (t in cars){
// //     text+= cars[t]+ " "
// //     debugger
// //     console.log(text)

// // }

// // constructors

// // Object Constructor Functions
// // Sometimes we need to create many objects of the same type.

// // To create an object type we use an object constructor function.

// // It is considered good practice to name constructor functions with an upper-case first letter.


// function Person(first,last,age,eye){
//     this.firstname=first
//     this.lastname=last
//     this.age=age
//     this.eye=eye
//     this.nationality='english' //property default values

// }

// // create a new objects for that we need to use new keywords

// const father=new Person('jose','valverde',20,2.5)
// const mother=new Person('sally','valverde',18,5.5)
// const child=new Person('victor','valverde',7,2.3)

// console.log(child.age)


// // Property Default Values
// // A value given to a property will be a default value for all objects created by the constructor:
// console.log(child.nationality)


// //Adding an property to an object

// father.gender="male"

// console.log(father)

// //Note:
// // The new property will be added to myFather. Not to any other Person Objects.


// // Adding a Property to a Constructor

// Person.prototype.income = 40000;

// console.log(child.income)

// //Constructor Function Methods

// function Cars(brand,year,wkg){
//     this.brandname=brand
//     this.year=year
//     this.weightinkgs=wkg
//     this.brndy=function(){
//         return this.brandname+" "+this.year
//     }
// }

// const car1=new Cars("bmw",2014,800)
// const car2=new Cars("audi",2016,900)
// const car3=new Cars("mercedes",2020,850)


// console.log(car3.brndy())

// // Adding a Method to an Object
// // Adding a method to a created object is easy:

// mother.changeName = function (name) {
//     this.lastname = name;
//   }

// mother.changeName("ver")
// console.log(mother)

// console.log(mother.lastname)
// // The new method will be added to myMother. Not to any other Person Objects.

// // Adding a Method to a Constructor

// // You cannot add a new method to an object constructor function.

// // This code will produce a TypeError:

// // Example
// // Person.changeName = function (name) {
// //   this.lastName = name;
// // }

// // myMother.changeName("Doe");


// Person.prototype.changeName = function (name) {
//     this.lastName = name;
//   }
  
// myMother.changeName("Doe");

// console.log(Person)

//objects methods
// JavaScript Object Methods can be grouped into:

// - General Methods
// - Property Management Methods
// - Object Protection Methods

//General Methods





