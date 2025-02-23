const user = {
    username: "Saswat",
    website: "Youtube",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to ${this.website}`)
        // console.log(this)
    },
}

// user.welcomeMessage();
// user.username ="Payal";
// user.welcomeMessage();

// console.log(this)

// function chai(){
//     const username = " laswat"
//     console.log(this)
// }

// const chai =  function(){
//     const username = " laswat"
//     console.log(username);
    
//     console.log(this)
// }


//method 1 of declaring arrow functions
// const chai = () =>{
//     const username = "Saswat"
//     console.log(this)
// }

//but in react the following method is used more rigourously because it makes in easier to return objects

const addTw0 = (num1, num2) => ({username: "Saswat"})

// console.log(addTw0(3, 5))

const myArray = [ 1, 2, 3, 4, 5]

myArray.forEach( (num1) => (console.log(num1)) )