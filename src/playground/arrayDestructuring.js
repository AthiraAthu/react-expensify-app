// console.log("App is ruuning")

//Array destructuring

const myList = ['Periya','Kasaragod','Kerala','671316']
// const [streest, district, state, zip] = myList
// const [, district, state, zip] = myList//skip the 1st item in the array
const [ , , state = 'New York'] = myList//skip 1st two items
console.log(state)