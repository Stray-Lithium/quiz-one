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
  var string = first;
  return string.charAt(0);
  // Given a name
  // Return the first letter of a name
}

function getInitials(first) 
  {
    var names = first.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
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

//need to be shown what I messed up^^
//

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
