//for of

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i)
}

const myObj = {
    name: "Saswat",
    email: "saswatrath02@gmail.com"
}

console.log(myObj.email)


// for (const ind of myObj) {
    // console.login(ind);
// }

const str = "Saswat Rath"

for (const index of str) {
    // console.log(index);
}

const mp = new Map();

mp.set("in", "India")
mp.set("ban", "Bangladesh")
mp.set("us", "United States of America")

for (const [key, value] of mp) {
    console.log(`${key} represents ${value}`);   
}
