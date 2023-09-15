// Convert a Number to an Array of Digits
const numberToArray = number => [...`${number}`].map(el=> parseInt(el)) 
console.log(numberToArray(3432343243))