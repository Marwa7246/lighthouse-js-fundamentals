//Inside the file, define a function called isOdd.
//This function should take a number as a parameter and return true if it is odd and false otherwise.


function isOdd(x) {
  return (x % 2 === 0 ?  false :  true);
}  
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));