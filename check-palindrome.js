// check if a string is a palindrome

const isPalindrome = (str) => str === str.split('').reverse().join('') 
console.log(isPalindrome('madam'))
console.log(isPalindrome('even'))
console.log(isPalindrome('wow'))