const name = "Saswat"
const age = "22"

//console.log( name + age+ " your string message here")
// console.log(`My name is ${name} and my age is ${age}`)

const gameName = new String("Avidlands-of-you")

// console.log(`Trial purpose ${gameName[6]} also ${gameName[9]} oops sorry ${gameName[7]}`)

// console.log(gameName.length)

// console.log(`The charAt property for index 7 ${gameName.charAt(7)} then the uppercase property ${gameName.toUpperCase()}`)

// console.log(gameName.__prototype__)
// console.log(gameName.lastIndexOf('n'))

const newString =  gameName.substring(1, 15)
// console.log(newString)
const newStr = gameName.slice(-5, -2)
// console.log(newStr)

const testStr = "       username      "
// console.log(testStr)
// console.log(testStr.trim())
// console.log(testStr.trimStart())
// console.log(testStr.trimEnd())


const url = "https://saswatrath%40netlify%40app/"

// console.log(url.replaceAll("%40", "."))
// console.log(url.includes('app'))

const newS = gameName.split("-")
console.log(newS[1])