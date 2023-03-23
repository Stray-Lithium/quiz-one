function addTwoNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function minusTwoNumbers(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiplyTwoNumbers(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function devideTwoNumbers(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
  // This code works and is really readable
  // Just remember that the 'condition' part of the statement is equal to a boolean of either true or false
  // Returning the condition itself would actually be fine
  // return number % 2 == 0
  // Side note for returning two things based on a condition, look up turnary statements
}

function greeting(name) {
  return 'Hello, my name is ' + name;
  // You do not need brackets around (name) <-- still works though
  // Look up string interpolation and try solve this with it
  // I use interpolation 100% of the time rather than adding strings together
}

function getFirstLetter(name) {
  return name[0];
  // Return the first letter of a name

  // No need for the brackets around the return (name[0])
}

function getInitials(firstName, lastName) {
  return firstName[0] + lastName[0];

  // Given a full name
  // Return the initials

  // Try this again BUT with a full name coming in as one string as the same perameter
  // I have changed the test for you so its currently failing
  // Again try solve it with interpolation <-- your way is still correct
}

function isThereASausage(phrase) {
  let outcome = phrase.search('sausage');
  if (outcome == false) {
    return "You're good homie, theres no sausage here";
  } else {
    return true;
  }
  // You are saying if outcome is == false
  // you can use the operator of ! to give an opposite falsy or truthy value
  // This would look like if (!outcome)
  // You could also use if (outcome) {return true} <-- instead of having to use the opposite of outcome you could just switch which boolean is return first
  // Could also use a turnery here
}
// 'I do not contain the word sausage, please look elsewhere.'

// These two below now fail, the test was slightly wrong
// Fix these two below questions so they work again

function turnStringIntoNumber(string) {
  return Number('number');
  // Given a number in the form of a string
  // Return a number
}

function turnNumberIntoString(number) {
  return String('number');

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
