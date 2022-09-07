const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString === undefined || arrayOfString=== null)
  {
    return undefined
  }
  let maxLengthString ;
  let max=-1;
  for( index of arrayOfString)
  {
   
    if(index.length >=max)
    {
      if(index.length ===max)
      {
        maxLengthString.push(index)
      }
      else{
        max=index.length;
        maxLengthString=[index];
      }
      
    }
  }
  return maxLengthString
}
// let test=['hello', 'hi', 'hey']
let test =['hello', 'hi', 'hey', 'Good Evening', 'Good Morning'];
console.log(getMaxLengthString(test));
module.exports = getMaxLengthString
