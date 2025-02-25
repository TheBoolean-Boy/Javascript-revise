const lang = ["java", "javascript", "cpp", "oxygen", "carbon"]

// const values = lang.forEach( (item) =>{
//     return item //sadly we cant return items through any foreach values
// })

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 10]

const newNums = myNums.filter( (nums) => {
    return nums>4
})
// console.log(newNums);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Fiction', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let myBooks = books.filter( (bk) => bk.genre === 'Non-Fiction')
  
  // myBooks = books.filter( (bk) => {
  //   if (bk.genre === 'Fiction'){
  //       return bk
  //   }
  // })

  myBooks = books.filter((bk) => bk.genre === 'Fiction')
  // myBooks = books.map((bk) =>{
  //   return bk.publish > 1990
  // })
  // console.log(myBooks);
  
  myBooks.map( (item) => {
    console.log(`Accroding to your need we have a title called${item.title} published in the year ${item.publish} and latest edition of ${item.edition}`)
  })

  // myBooks.map((bk) => {
  //   console.log(`${bk.edition} edition available`)
  // })
  