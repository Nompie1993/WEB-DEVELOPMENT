// single comment
/* multi-line comment */

// store data in a form of variables (var).
//declaring variables
//1. var can be changed
 var name = "John Doe"; // string
console.log(name); // John Doe

//2. let can be changed
let age = 30; // number
console.log(age); // 30


//3. const cannot be changed
const pi = 3.14; // number
console.log(pi); // 3.14

//data types
//primitive data types
//1. string - text
let firstName = "John"; // string


//2. number - numbers
let age = 30; // number 


//3. boolean - true or false
let isStudent = true; // boolean

//4. null - no value
let emptyValue = null; // null      

//5. undefined - variable not defined
let notDefined; // undefined       

//non primitive data types
//1. object - collection of key-value pairs
//syntax: let objectName {key: value}; properties are separated by commas
let person = { // object
    name: "John",
    age: 30,
    isStudent: true
};
console.log(person); // { name: 'John', age: 30, isStudent: true }
console.log(person.name); // John 
console.log(person["age"]); // 30


//2. array - collection of values deal with square brackets []indexing with 0
//syntax: let arrayName = [value1, value2, value3];
let fruits = ["apple", "banana", "orange"]; // array

//operator - used to perform operations on variables and values
//1. arithmetic operators - used to perform arithmetic operations   
//addition +, subtraction -, multiplication *, division /, modulus %
//increment ++, decrement --, exponentiation **   

 //2 arithmetic  operators
let a = 10; // number   
let b = 5; // number
let sum = a + b; // addition        
console.log(sum); // 15
let difference = a - b; // subtraction  
console.log(difference); // 5
let product = a * b; // multiplication      

console.log(product); // 50 

let quotient = a / b; // division
console.log(quotient); // 2


//3. comparison operators - used to compare two values and return a boolean value (true or false)   
//equal to ==, not equal to !=, greater than >, less than <, greater than or equal to >=, less than or equal to <=
//syntax: variableName operator value
let x = 10; // number   
let y = 5; // number
let isEqual = x == y; // equal to
console.log(isEqual); // false
let isNotEqual = x != y; // not equal to
console.log(isNotEqual); // true
let isGreaterThan = x > y; // greater than
console.log(isGreaterThan); // true
let isLessThan = x < y; // less than
console.log(isLessThan); // false
let isGreaterThanOrEqualTo = x >= y; // greater than or equal to
console.log(isGreaterThanOrEqualTo); // true
let isLessThanOrEqualTo = x <= y; // less than or equal to
console.log(isLessThanOrEqualTo); // false

//type conversion - converting one data type to another
//syntax: variableName = value.toString(); to convert to string     
//syntax: variableName = parseInt(value); to convert to integer

let num = 10; // number
let str = num.toString(); // convert to string
console.log(str); // "10"

console.log(5 == 5); // true
console.log(5 === 5); // false

//4. logical operators - used to combine two or more boolean values and return a boolean value (true or false)
//and &&, or ||, not !
//syntax: variableName = value1 operator value2;
let isTrue = true; // boolean
let isFalse = false; // boolean     
let andOperator = isTrue && isFalse; // and operator
console.log(andOperator); // false
let orOperator = isTrue || isFalse; // or operator
console.log(orOperator); // true


//function - a block of code that performs a specific task and can be reused
//syntax: function functionName(parameters) { code to be executed }     
//function declaration
function greet(name) { // function with parameter
    console.log("Hello " + name); // code to be executed
}   
