function addTwoNumbers(numOne, numTwo) {
  // Add two numbers together
  return numOne + numTwo;
};

function minusTwoNumbers(numOne, numTwo) {
  // Minus two numbers
  return numOne - numTwo;
};

function multiplyTwoNumbers(numOne, numTwo) {
  // Multiply two numbers
  return numOne * numTwo;
};

function devideTwoNumbers(numOne, numTwo) {
  return numOne / numTwo;
  // Devide two numbers
};

function evenOrOdd(number) {
if (number % 2 === 0) {
 return true;
} else { 
return false;
};
//return number % 2 === 0 ? true : false 
//console.log("The number is even.");
  // Given a number
  // Work out if number is even or odd
}

function greeting(name) {
  return `Hello, my name is ${name}`;
}

function getFirstLetter(first) {
  return first[0];
  
  // Given a name
  // Return the first letter of a name
  
  // So in this function try using the index of the string to get the answer
  // returning first[0] will give us what we want here
  // you see you can just use [] to access a position of a letter
}

function getInitials(test, poo) 
  {  
return test[0] + poo[poo.indexOf(' ') + 1]

    // Here we can use the index again, if we are given 'Nathan Masters' or we are given 'Egg Eggybread'
    // Given the two examples above we would want the index of 0 and 7 for my name 0 and 4 for the Egg name
    // FIRST INITIAL - always fullName[0] 
    // SECOND INITIAL - always the one after the space, something like fullName[fullName.indexOf(' ') + 1]
    // You see how this works for both examples now?
};

  // Given a full name
  // Return the initials
  // Only able to pull N


function isThereASausage(sample) 
 {
let text = sample;
let result = text.includes("sausage");
return result
 };

function turnStringIntoNumber(x) {
  var x = Number("1000")
  return x
  // Given a number in the form of a string
  // Return a number
}
                               
function turnNumberIntoString(three) {
let num = 3;
let text = num.toString(2);
return text

  // Given a string of a number
  // Return a string
}

module.exports = {
  addTwoNumbers,
  minusTwoNumbers,
  multiplyTwoNumbers,
  devideTwoNumbers,
  evenOrOdd,
  greeting,
  getFirstLetter,
  getInitials,
  isThereASausage,
  turnStringIntoNumber,
  turnNumberIntoString,
};
