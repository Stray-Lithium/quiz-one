const { number } = require('yargs');
const {
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
} = require('./functions');

describe('Basic number questions', () => {
  test('Adds two numbers together', () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
  });
  test('Minuses two numbers together', () => {
    expect(minusTwoNumbers(4, 2)).toBe(2);
  });
  test('Multiplies two numbers together', () => {
    expect(multiplyTwoNumbers(4, 2)).toBe(8);
  });
  test('Devides two numbers together', () => {
    expect(devideTwoNumbers(4, 2)).toBe(2);
  });
  test('Return true if number is even', () => {
    expect(evenOrOdd(4)).toBe(true);
  });
  test('Return false if number is odd', () => {
    expect(evenOrOdd(3)).toBe(false);
  });
});

describe('Basic String questions', () => {
  test('Return greeting', () => {
    expect(greeting('Nathan')).toBe('Hello, my name is Nathan');
  });
  test('Return first letter of a name', () => {
    expect(getFirstLetter('Nathan')).toBe('N');
  });
  test('Return initials of a full name', () => {
    expect(getInitials('Nathan Masters')).toBe('NM');
  });
  test('Return true if the text contains the word "sausage"', () => {
    expect(
      isThereASausage(
        'I do not contain the word sausage, please look elsewhere.'
      )
    ).toBe(true);
  });
  test('Turn a string into a number', () => {
    expect(turnStringIntoNumber('3')).toBe(3);
  });
  test('Turn a number into a string', () => {
    expect(turnNumberIntoString(3)).toBe('3');
  });
});
