const marvel = ["Thor", "Ironman", "Widow"]
const dchouse = ["Super", "Bat", "Wonder"]

// marvel.push(dchouse) <--- Not the very best way to merge two arrays together
// const res = marvel.concat(dchouse)
const India = ["Sub1", "sub2", "89Sub3"]
const res = [...dchouse, ...marvel, ...India]//<-- USe this way of merging
// console.log(res);

const test1 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10]]]
// const ans = test1.flat(Infinity)

// console.log(ans);

const str = "Saswat Rath"
const obj = {
    name:"Saswat",
    age: 22
}
console.log(Array.isArray("Saswat", "Rath"))
console.log(Array.from(str))
console.log(Array.from(obj)) //returns an empty array, will study later

const v1 = 100;
const v2 = 100;
const v3 = 100;


console.log(Array.of(v1, v2, v3))