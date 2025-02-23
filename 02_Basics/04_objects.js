//Way to decleare a singleton object
// const myObj = new Object()

const myObj = {}
myObj.name = "saswat";
myObj.email ="akjdkja@gmail.com";
myObj.age = 78;


// console.log(myObj.name)
myObj.name = "Alice";
// console.log(myObj.name)
// console.log(myObj);

const regularUser = {
    email: "xyz@gmail.com",
    username: {
        fullname: {
            firstname:"Saswat",
            lastname:"Rath"
        }
    }
}

// console.log(regularUser.username.fullname.lastname);

// console.log(regularUser.username?.fullname.lastname); In case we received an response from an API in the above format we use ? beside something to determine "If that value received then only proceed". this method avoids useless implementation of if and else conditions


const obj1 ={ a: 1, b: 2}
const obj2 ={ c: 1, d: 2}
const obj3 ={ d: 1, e: 2}

// const cObj = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const user = [
    {
        email:"jasjd@gmail.com",
        age:56
    },
    {
        email:"jasjd@gmail.com",
        age:56
    },
    {
        email:"jasjd@gmail.com",
        age:56
    },
    {
        email:"jasjd@gmail.com",
        age:56
    }
]

// console.log(user[3].email);
// console.log(myObj)

// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))
// console.log(Object.entries(myObj))

const course = {
    coursename: "JS in Hindi",
    courprice: 999,
    courseInstructor: "Saswat Rath"
}

const {courseInstructor: teacher} = course;
console.log(teacher);

const navbar = ({teacher}) => {

}

console.log(navbar)