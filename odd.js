function isOdd(num) {
  return num % 2 !== 0; // return T or F
}

console.log("3 is odd ? " + isOdd(3));
console.log("8 is odd ? " + isOdd(8));

/* alt version:
var numbr = 3;
console.log(numbr.toString() + " is odd ? " + isOdd(numbr));
*/