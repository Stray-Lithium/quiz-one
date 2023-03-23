function addTwoNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;

  
};

function minusTwoNumbers(numberOne, numberTwo) {
  return numberOne - numberTwo;
  
};

function multiplyTwoNumbers(numberOne, numberTwo) {
  return numberOne * numberTwo;

  
};

function devideTwoNumbers(numberOne, numberTwo) {
  return numberOne / numberTwo;
};

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
  
}

function greeting(name) {
  return "Hello, my name is " + (name) ;
}

function getFirstLetter(name) {
  return (name[0]);
  // Return the first letter of a name
}

function getInitials(firstName, lastName) {
  return (firstName[0] + lastName[0]);

  
  // Given a full name
  // Return the initials
};



function isThereASausage(phrase) {
  let outcome = phrase.search("sausage");
  if (outcome == false) {
    return "You're good homie, theres no sausage here";
  } 
  else {
    return true;
  }
  }
// 'I do not contain the word sausage, please look elsewhere.'

function turnStringIntoNumber(string) {
  return Number("number");
  // Given a number in the form of a string
  // Return a number
}
                               
function turnNumberIntoString(number) {
  return String("number");

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
