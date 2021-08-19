function getMinMax(str) {
  newStr = str.split(" ").filter(item => !isNaN(item)).sort((a, b) => a - b);
  return {min: +newStr[0], max: +newStr[newStr.length - 1]}
}
