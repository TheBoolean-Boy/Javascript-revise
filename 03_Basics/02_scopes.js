let a = 10;
const  b = 20;
var c = 30;

if(true){
    let a  = 34;
    const b = 56;
    var c =  67;
    // console.log(a, b, c);
}
// console.log(a, b, c)

//var violates scopes
//local and global scopes

console.log(addOne(4));
function addOne(num){
    return num + 1;
}

const addTwo = function(nums){
    return nums+2;
}
console.log(addTwo(4));
