function sayMyname(){
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")
    console.log("s")
}

// sayMyname <-- reference
// sayMyname() <-- execution

// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
//     return number1 + number2;
// }

// const result = addTwoNumbers(2, 5);
// console.log("Result:", result);

function userLoggedInMessage(username){
    if(!username){
        return `Please enter a username`
    }
    return `${username} just logged in`
}

function checker(){
    return undefined === false
}
// console.log(checker())

// console.log(userLoggedInMessage())

function calculateCartValue(val1 , val2, ...num1){
    return num1
}

// console.log(calculateCartValue(100, 200, 400, 1500, 6000));

const user = {
    username: "Saswat",
    age: 22
}
function handleObject(anyobject) {
    console.log(`The name of the student is ${anyobject.username} and theri age is ${anyobject.age}`)
}

// handleObject(user);
handleObject({
    username: "Samay",
    age: 23
})
