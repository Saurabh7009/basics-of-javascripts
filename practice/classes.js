//JavaScript Classes--refer chatgpt--https://chatgpt.com/c/66e05c69-09d8-8001-9edf-1b92d8a07334

//1. Better Structure and Readability:
// Classes provide a cleaner and more intuitive syntax for defining objects and their behaviors, 
// especially for developers familiar with OOP from other languages (like Java, C++, or Python).
//It provides a clearer separation of properties and methods, which enhances code readability.


// class Person{
//     constructor(){}//basic code
// }

// class Car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }


// // A JavaScript class is not an object.

// // It is a template for JavaScript objects.

// const mycar1=new Car("Ford",2014);
// const mycar2=new Car("Audi",2017);

// The Constructor Method
// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, 
// JavaScript will add an empty constructor method.

// Use the keyword class to create a class.

// Always add a constructor() method.

// Then add any number of methods.

// class Classname{
//     constructor(){
//         //properties
//     }
//     method_1(){}
//     method_2(){}

// }

// // Create a Class method named "age", that returns the Car age:


// class Car1{
//     constructor(name,year){
//         this.name=name
//         this.year=year

//     }

//     age(x){  //You can send parameters to Class methods:

//         return x-this.year

//     }


// }

// const date=new Date();
// let x=date.getFullYear()
// console.log(x)

// // creating an object
// const myCar1=new Car1("audi",2014);
// const myCar2=new Car1("mercedes",2018);

// console.log(`My Audi Turns Out To Be ${(myCar1.age(x))} Years Old`)
// console.log(`My Mercedes Turns Out To Be ${myCar2.age(x)} Years Old`)


//Class Inheritance

//To create a class inheritance, use the extends keyword.


class Car {
    constructor(brand){
        this.carname=brand


    }

    present(){
        return `i have a ${this.carname}`
    }
}


class Model extends Car{ //child class
    constructor(brand,mod){
        super(brand);// extends from car class super keyword
        this.model=mod
    }

    show(){
        return this.present() + `and the model is ${this.model}`
    }
}

const mo=new Model("audi",2017); // create an object for child class which will inherit the property from parent class
console.log(mo.show())


const cr=new Car("audi")
console.log(cr.present());

//--------------------super keyword--------------------------
// By calling the super() method in the constructor method,
//  we call the parent's constructor 
// method and gets access to the parent's properties and methods.

//--getter and setter method--------------------

// Parent class
class Parent {
    constructor(name) {
      this._name = name; // The underscore is a convention to indicate a private property
    }
  
    // Getter method
    get name() {
      return this._name;
    }
  
    // Setter method
    set name(value) {
      this._name = value;
    }
  }
  
  // Child class inheriting from Parent
  class Child extends Parent {
    constructor(name, age) {
      super(name); // Call the parent class constructor
      this._age = age;
    }
  
    // Getter method for age
    get age() {
      return this._age;
    }
  
    // Setter method for age
    set age(value) {
      this._age = value;
    }
  }
  
  // Example usage
  const child = new Child('John', 10);
  
  // Using inherited getter and setter methods
  console.log(child.name); // Output: John
  child.name = 'Jane';
  console.log(child.name); // Output: Jane
  
  // Using child class-specific getter and setter methods
  console.log(child.age); // Output: 10
  child.age = 11;
  console.log(child.age); // Output: 11

  
  //-------------------------static methods-----------------------------


// Static class methods are defined on the class itself.

// You cannot call a static method on an object, only on an object class.

class car{
    constructor(name){
        this.name=name
    }

    static hello(){
        return 'hello'
    }

}



console.log(car.hello()) // calling an class using static method


// now if you reqires the use of object in static method


class car1{
    constructor(name){
        this.name=name
    }

    static hello(a){
        return `hello my car name is + ${a.name} ` //a.name not refer to every object only specific object
    }

}



// now static method can only access through class but there is 
// there is class property in it which can acess through class
//object 

//If you want to use the myCar object inside the static method,
// you can send it as a parameter:
const a=new car1("ford")
console.log(car1.hello(a))

