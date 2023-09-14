// check if a number is an integer

const ifInteger = (num) =>{
    return num%1===0 ? true : false
}
console.log(ifInteger(78.4))
console.log(ifInteger(78))