const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString === undefined || arrayOfString=== null)
  {
    return undefined
  }
  let maxLengthString;
  let max=-1;
  for( index in arrayOfString)
  {
    // console.log(arrayOfString[index]);
    if(arrayOfString[index].length >max)
    {
      max=arrayOfString[index].length;
      maxLengthString=arrayOfString[index];
    }
  }
  return maxLengthString
}
// let test=['hello', 'hi', 'hey']
let test =['hello', 'hi', 'hey', 'Good Evening', 'Good Morning'];
console.log(getMaxLengthString(test));
module.exports = getMaxLengthString
