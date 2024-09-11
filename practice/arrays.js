// // // //Arrays

// // // // const cars=['bmw','ausi','polo','mercedes']
// // // const cars = ["Saab", "Volvo", "BMW"];
// // // let car = cars[0]; //accessing the array through indexing
// // // // while the objects will access its elemnts through object.name  for eg:-person.fullname 
// // // cars[0] = 'volvo' //changing of elemnt using indexing
// // // console.log(cars)

// // // let c = cars.toString() //converts an array into string
// // // console.log(c)
// // // console.log(cars)//accesing the full array

// // // console.log(cars.length)//provides the length of the array

// // // console.log(cars[0])//accessing the first element
// // // console.log(cars[cars.length - 1])//accessing the last element

// // // //looping an array
// // // text = ''
// // // for (x in cars) {

// // //     console.log(cars[x])



// // // }

// // // //adding array element using push method

// // // cars.push('mercedes')
// // // console.log(cars)

// // // cars[cars.length] = 'tata'
// // // console.log(cars)

// // // //The Difference Between Arrays and Objects
// // // // In JavaScript, arrays use numbered indexes.  

// // // // In JavaScript, objects use named indexes.

// // // //always create an array with array literrals not with new Array()

// // // //How to Recognize an Array

// // // console.log(typeof cars)// it will return object

// // // console.log(Array.isArray(cars)) //it will return return if ts an array or not

// // // // Nested Arrays and Objects
// // // // Values in objects can be arrays, and values in arrays can be objects:

// // // const myObj = {
// // // //     name: "John",
// // // //     age: 30,
// // // //     cars: [
// // // //         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
// // // //         { name: "BMW", models: ["320", "X3", "X5"] },
// // // //         { name: "Fiat", models: ["500", "Panda"] }
// // // //     ]
// // // // }

// // // // let a = myObj.cars
// // // // for (let i = 0; i < a.length; i++)
// // // // {
// // // //     console.log(a[i].name.toUpperCase())
// // // //     for(let j=0;j<a[i].models.length;j++)
// // // //         console.log(a[i].models[j])
// // // // }

// // // //   for (let i = 0; i < a.length; i++) {
// // // //     console.log(a[i]);  // This should log each car object
// // // //     console.log(a[i].name);  // This should log the 'name' property of each object
// // // // }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // // array methods
// // //pop()---removes end element of array
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.pop())

// // //push()------add element at the end of the array
// // console.log(fruits.push('naina'))
// // console.log(fruits)

// // //shift()----------removes the first element of thee array and give the other elements the lower index
// // console.log(fruits.shift())
// // console.log(fruits)

// // //unshift()------------added the element at the first index and shifeted the other elements 
// // console.log(fruits.unshift('kiwi'))
// // console.log(fruits)

// // //access the array []
// // console.log(fruits[0])

// // //delete the array using pop(), shift method if using delete it will put undefined holes
// // // console.log(delete fruits[0])
// // // console.log(fruits[0])


// // // console.log(Array.prototype.push);
// // // console.log(Array.prototype.shift);
// // //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// // // The concat() method creates a new array by merging (concatenating) existing arrays:
// // // The concat() method does not change the existing arrays. It always returns a new array.

// // // The concat() method can take any number of array arguments.
          
// // const myGirls = ["Cecilie", "Lone"];
// // const myBoys = ["Emil", "Tobias", "Linus"];

// // const myfamily=myGirls.concat(myBoys)
// // console.log(myfamily)
 
// // //concat can also take two arguments

// // const arr1 = ["Cecilie", "Lone"];
// // const arr2 = ["Emil", "Tobias", "Linus"];
// // const arr3 = ["Robin", "Morgan"];

// // const arr4=arr1.concat(arr2,arr3)
// // console.log(arr4)

// //he copyWithin() method copies array elements to another position in an array:
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.copyWithin(1,0)) //parameters 1arg target  2arg: index position of the element thats to be copied to the target
// // console.log(fruits.copyWithin(1,2,3))    // 1st target , 2nd start , 3rd end

// // The copyWithin() method overwrites the existing values.

// // The copyWithin() method does not add items to the array.

// // The copyWithin() method does not change the length of the array.

// //JavaScript Array flat()

// // The flat() method creates a new array with sub-array elements concatenated to a specified depth

// // const myArr = [[1,2],[3,4],[5,6]];
// // console.log(myArr.flat())

// // Splicing and Slicing Arrays
// // The splice() method adds new items to an array.

// // The slice() method slices out a piece of an array.

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.slice(0,1))
// // console.log(fruits.splice())
// // fruits.splice(2, 2, "Lemon", "Kiwi"); // 1st arg index , 2nd arg delete no.of.elements frm index, 3arg eleemnts to be put
// // // The first parameter (0) defines the position where new elements should be added (spliced in).

// // // The second parameter (1) defines how many elements should be removed.

// // // The rest of the parameters are omitted. No new elements will be added.

// // // tospliced()

// // `The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, 
// // keeping the original array unchanged, while the old method altered the original array.`

// // const months = ["Jan", "Feb", "Mar", "Apr"];
// // console.log(months.toSpliced(0,1,"hehe"))

// // JavaScript Array slice()
// // The slice() method slices out a piece of an array into a new array:

// // The slice() method can take two arguments like slice(1, 3).

// // The method then selects elements from the start argument, and up to (but not including) the end argument.

// // const fruites = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const slicy=fruites.slice(1,3)
// // console.log(slicy)
//----------------------------------------JavaScript Array Search----------------------------------------------------------

// // const fruits = ["Apple", "Orange", "Apple", "Mango"];
// // console.log(fruits.indexOf('Apple')+1)

// // Array.lastIndexOf() is the same as Array.indexOf(),
// //  but returns the position of the last occurrence of the specified element.

// // console.log(fruits.lastIndexOf('Apple')+1)

// // Array.includes() to arrays.
// //  This allows us to check if an element is present in an array (including NaN, unlike indexOf).

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.includes('Orange'))

// //JavaScript Array find()
// // The find() method returns the value of the first array element that passes a test function.

// // This example finds (returns the value of) the first element that is larger than 18:

// // const numbers = [4, 9, 16, 25, 29];
// // debugger;
// // const first=numbers.find(myfunc()); //
// // function myfunc(value,index,array){
// //     debugger;
// //     return value>18
// // }

// // console.log(first)


// //------------------------------------------------------- Array Sorting --------------------------------------------

// //The sort() method sorts an array alphabetically:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort())

// //The reverse() method reverses the elements in an array

// console.log(fruits.reverse())

// //The difference between toSorted() and sort() is that the first method creates a new array, 
// //keeping the original array unchanged, while the last method alters the original array.

// const Sorting=fruits.toSorted()
// console.log(Sorting)

// //toReversed() is same as reversed but it will create an new array

// //sort() method

// const sort=[40, 100, 1, 5, 25, 10];
// console.log(sort.sort(function(a,b){return a-b}))// type of function use is anynoyumus function

// // Use the same trick to sort an array descending:

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});

// // Example (Find Min)
// // function myArrayMin(arr) {
// //   let len = arr.length;
// //   let min = Infinity;
// //   while (len--) {
// //     if (arr[len] < min) {
// //       min = arr[len];
// //     }
// //   }
// //   return min;
// // }

// // find maximum

// // function myArrayMax(arr) {
// //     let len = arr.length;
// //     let max = -Infinity;
// //     while (len--) {
// //       if (arr[len] > max) {
// //         max = arr[len];
// //       }
// //     }
// //     return max;
// //   }

////-------------------------------------------- JavaScript Array Iteration-----------------------------------------------

// //foreach()-- callback function calling the function for evert iteration

// // const numbers = [45, 4, 9, 16, 25];
// // text=''
// // const vare=numbers.forEach(myfunction);
// // function myfunction(value,index,array){
// //     text=text+value+" "
    
// // }

// // console.log(text)


// // JavaScript Array map()

// // The map() method creates
// // a new array by performing a function on each array element.

// // The map() method in JavaScript does not execute the provided
// //  callback function for array elements that are undefined or are 
// // "empty slots" (i.e., unassigned elements) in sparse arrays.

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2=numbers1.map(myfunc)
// function myfunc(value,index,array){
//   return (value*2 + ` ${index}`).split(" ")
// }

// console.log(numbers2)


//flatmap array()

// The flatMap() method first maps all elements 
// of an array and then creates a new array by flattening the array.

// const myArr = [1, 2, 3, 4, 5, 6];
// const newarr=myArr.flatMap(myfunc)
// function myfunc(value,index,array){
//     return [value,value*10]
    
// }

// console.log(newarr)

//filter() works the same like flatmap array but there is an condition

// The filter() method creates a new array with array elements that pass a test.

// This example creates a new array from elements with a value larger than 18:


//reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// const numbers = [45, 4, 9, 16, 25];
// const newo=numbers.reduce(myfunc)
// function myfunc(total,value,index,array){
//   return total
// }
// console.log(newo)

// .from()
// The Array.from() method returns an Array object from any object 
//with a length property or any iterable object.

// console.log(Array.from("ABCDEFG"));


// .keys() methods

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys(); //returns iterator with the keys
// console.log(keys)
// let text=""
// for (let x of keys) {
//     text += x;
//   }
// console.log(text)


//-------------------------------------------------------Array Const------------------------------------------

//refer w3 schools



