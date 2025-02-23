// Immediately Invoked Function Expressions

//Use these wehn you want less pollution from global scope/context
//and when u want a function to be immediately executed

//named iife
(function chai() {
    console.log(`We are inside chai iife`)
})();

//whenever you are writing two or more iife together dont forget to separate them via a ";"

( (num1) => (
    console.log(`we have accessed ${num1}`)
))(6)