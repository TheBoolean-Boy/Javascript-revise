// Object like a constructor or Singleton Object
// Object.create

// Object Literals
const mySym = Symbol("key1")

const jsUser ={
    "full name": "Saswat Rath",
    age:45,
    [mySym]: "key1",
    email: "saswatrath89@gmail.com",
    location: "Rourkela",
    isLoggedIn: true,
    lastloginDays: ["Monday", "Tuesday", "Sunday"]
}

console.log(jsUser.email)// <-- dont use this method to access the elements of the object
// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);
// console.log(jsUser["age"]);
// console.log(jsUser[mySym]);

jsUser["email"] = "bunnysen@gmail.com";
// Object.freeze(jsUser);
jsUser["email"] = "bunnysen@gmail.com"
console.log(jsUser)

jsUser.temperament = function(){
    console.log("Short tempered")
}
jsUser.temperamentTwo = function(){
    console.log(`Well ${this["full name"]} does have anger issues`)
}

console.log(jsUser.temperament())
console.log(jsUser.temperamentTwo())


