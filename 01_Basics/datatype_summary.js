// Primitive
// 7 types: String, Boolean, Number, null, Undefined, Bigint, Symbol
const bigNumber = 238238492304902384982933423423423987387234928n

const hanime = 89
const utui = 56.89

const usLoggedIn = false
const checker = null
let undo;

// Reference(Non-primitive)
// Arrays, Objects, Functions

const id = Symbol("123")
const uid = Symbol("123")
// console.log(id === uid)


//double and integer values unlike other languages fall under the same hood and come under the "Number" datatype


//If a number is too large for number type to represent you can use bigint to represent the same in the following way

const heroes = ["Ironman", "Captain America", "Blackwidow"]
let myObj = {
    name: "Saswat",
    age: 22
}

const func = function(){
    console.log("Hello World")
}

// console.log(typeof id)

//-----------------------Return typeof of DataTypes-----------------------

//primitive Datatypes
// String = string
// Boolean = boolean
// Number = number
// null = object
// undefined = undefined
// Bigint = bigint
// Symbol = symbol

//Reference or Non-primitive Data Types
// Arrays(= []) => object
// Objects (= {}) => object
// Funtion( =  (){}) => function object


//------------Stack and Heap Memory-------------------------

let userName = "Saswat"

let otherName = userName
otherName ="Babu"
// console.log(userName)
// console.log(otherName)

let userOne =  {
    name: "Saswat Rath",
    id: "jsfsdfjsf"
}

let userTwo = userOne

userTwo.name = "Amrit Rath"
console.log(userOne.name)

