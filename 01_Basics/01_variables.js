const accountId = 144553
let accountEmail = "saswatrath62@gmail.com"
var accountPassword = "12345"
accountCity = " Bhubaneswar"
const dummy = 1


let accountState; //I haven't allocatd anything so by default it value will be undefined

if (dummy) {
    var accountPassword = "changed"
    let accountEmail = "chnagedemail@gamil.com"
    console.table([accountPassword, accountEmail])
}

//prefer using let over var always
//JS doesnt knew the block scope and fucntional scope
// accountId = 89 // not allowed

// console.log(accountId);

// accountEmail = "asndas@gmail.com"
// accountPassword = "njsdfjs"
// accountCity = "raipur"
console.table([accountPassword, accountEmail])