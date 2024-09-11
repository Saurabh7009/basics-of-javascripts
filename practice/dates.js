
// By default, JavaScript will use the browser's time zone and display a date as a full text string:

// Wed Sep 04 2024 18:12:43 GMT+0530 (India Standard Time)

// new Date() creates a date object with the current date and time:
// const d = new Date();

// console.log(d)

// new Date(date string) creates a date object from a date string:

// const d = new Date("October 13, 2014 11:13:00");

// const d = new Date("2022-03-25");
// console.log(d)

// new Date(year, month, ...) creates a date object with a specified date and time.

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// in javascript the month counts from 0 to 11

const c=new Date(2018,11,22,12,59,36,1)
console.log(c)

//6 parameters -- year,month,day,hour,minutes,seconds
//5parameter-- year,month,day,hour,minutes
//4parameter-- year,month,day,hour
//3parameter-- year,month,day
//2parameter-- year,month
////1parameter-- will count as milliseconds


// the milliseconds should be counted from 1 jan 1970
const d= new Date(12000)
console.log(d)

//ISO Date	"2015-03-25" (The International Standard)

const e=new Date("2016-08-25")
console.log(e)

// Commas are ignored. Names are case insensitive:

//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

//Date.parse() returns the number of milliseconds between the date and January 1, 1970:

//Date.parse() is a static method 

// const f= Date.parse("March 25,2018")

// console.log(f)

//---get methods --------------------------------------------

// .get() methods mostly work on static date object so we need to store that obj in variable and then apply get() method

//The Date.now() Method
//Date.now() returns the number of milliseconds since January 1, 1970.
//static method of date object
// const year_in_mill=365*24*60*60*1000
// const f=Date.now()
// const year_tillnow=Math.round(f/year_in_mill)
// console.log(year_tillnow)


// refer ---------------w3schools--------set() of Dates-------------------------------------------------------------



