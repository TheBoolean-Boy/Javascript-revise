const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.reduce( function(accumulator, currentValue){
//     return accumulator+currentValue;
// }, 0)

// const result =  arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0)

// const result = arr.reduce((accumulator, cureentValue) => accumulator+cureentValue, 0)

// console.log(result);

const shoppingCart = [
    {
        item: "Javascript Course",
        price: 2999
    },
    {
        item: "Ruby on Rails Course",
        price: 3999
    },
    {
        item: "Python Course",
        price: 2999
    },
    {
        item: "Data Science Course",
        price: 10999
    },

]

const cartTotalValue = shoppingCart.reduce( (accumulator, cureentValue) => ( accumulator + cureentValue.price) , 0)

console.log(cartTotalValue);

