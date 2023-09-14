const newString = Math.random().toString(16).slice(2)
console.log(newString)

// generate string for the given length 
const fixedStringGeneration= (length=24)=>{
    let result= '';
    while(result.length<length){
      result+=Math.random().toString(36).slice(2)
    }
    return result.slice(0,length)
  }
  console.log(fixedStringGeneration())