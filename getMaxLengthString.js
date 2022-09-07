const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === undefined || arrayOfString === null) {
    return undefined
  }
  let maxLengthString=arrayOfString[0];
  for (index of arrayOfString) {

    if (index.length >= maxLengthString[0].length) {
      if (index.length === maxLengthString[0].length) {
        maxLengthString.push(index)
      }
      else {
        maxLengthString = [index];
      }

    }
  }
  return maxLengthString
}
module.exports = getMaxLengthString
