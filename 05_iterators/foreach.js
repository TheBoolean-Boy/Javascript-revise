const lang = ["java", "javascript", "cpp", "oxygen", "carbon"]

lang.forEach( function(item) {
    // console.log(item);
})

// lang.forEach( (item) => (
    // console.log(item)
// ))

// lang.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }
// lang.forEach(printMe)

const APIresponse = [
    {
        city: "Rourkela",
        temperature: 45
    },
    {
        city: "Bhubaneswar",
        temperature: 23
    },
    {
        city: "Mumbai",
        temperature: 45
    },
    {
        city:"Gurugram",
        temperature: 34
    }
]
APIresponse.forEach( (item) => {
    console.log(`${item.city} has a recorded a temperature of ${item.temperature}`);
})