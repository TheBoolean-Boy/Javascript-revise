// falsy values
// 0 , -0, BigInt 0n, "", false, null, undefined, NaN

// Truthy values
// True, "0", "False", " ", [], {}, fucntion(){}

// How to check if an oject is empty
const myObj = {}

if(Object.keys(myObj).length === 0){
    // console.log("Empty Oject")
}

//check for empty array
const myArr = []
if(myArr.length === 0){
    // console.log("Empty Array");
    
}

// Nullish coalescing Operator (??): null undefined

let val1  = null ?? "saswat"
// console.log(val1);

val1 = null ?? undefined
// console.log(val1);


//Ternary Operator

const val = (3>4)?3 : 2
console.log(val);
