// falsy values
// 0 , -0, BigInt 0n, "", false, null, undefined, NaN

// Truthy values
// True, "0", "False", " ", [], {}, fucntion(){}

// How to check if an oject is empty
const myObj = {}

if(Object.keys(myObj).length === 0){
    console.log("Empty Oject")
}

//check for empty array
const myArr = []
if(myArr.length === 0){
    console.log("Empty Array");
    
}