const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === undefined || arrayOfString === null) {
    return undefined
  }
  let maxLengthString=[];
  for (array of arrayOfString) {
    if(maxLengthString.length === 0)
    {
      maxLengthString =[array]
    }
    else if (array.length >= maxLengthString[0].length) {
      if (array.length === maxLengthString[0].length) {
        maxLengthString.push(array)
      }
      else {
        maxLengthString = [array];
      }

    }
  }
  return maxLengthString
}
module.exports = getMaxLengthString
