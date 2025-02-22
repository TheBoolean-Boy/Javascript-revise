const score = 400

const you = new Number(100.78996)
// console.log(typeof you.toFixed(3))
// console.log(typeof you)

// console.log(you.toString().substring(0,5))

const yours = 100.78
// console.log(yours.toPrecision(6))
// console.log(typeof yours.toPrecision(6))

const hundreds = 100423423423
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(typeof hundreds.toLocaleString('en-IN'));


// ----------------------Maths------------------------------
// const arr = [4,  8, 9, 90]

// console.log(Math.floor(7.8))
// console.log(Math.ceil(7.8));
// console.log(Math.round(4.1));
// console.log(Math.round(4.6));
// console.log(Math.abs(-9))
// console.log(Math.max(4,  8, 9, 90))
// console.log(Math.min(4,  8, 9, 90));

// console.log(Math.random())
// console.log(Math.random()*10000)

//---------Generate a random number withnin a given range---------
const min = 6;
const max = 11;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// The above works because (max - min + 1) is used because we wanna multiply the size of our range and then add the min no. to it. Let's rmage is 7 to 12. 7 + anything between the 0 and size of the of range 
