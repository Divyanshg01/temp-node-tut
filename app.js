// // // // session 1
// const amount = 12;

// if(amount<10){
//     console.log("small")
// }
// else{
//     console.log("large")
// }


// console.log(`hey its my first node app`);



// Globals- NO WINDOW

// __dirname
// __filename
// require
// module 
// process


// console.log(__dirname);
// setInterval(()=>{
//     console.log('hello world')
// },1000)

// // // //

// modules-encapsulated code(only share min)

const names = require('./4-names');
// or

const {john,peter} = require('./4-names'); 
const sayHI =require('./5-utils')
console.log(names);



sayHI('divyansh')
sayHI(names.john)
// or
sayHI(john)

console.log(module);
