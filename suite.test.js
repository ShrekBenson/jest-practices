import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './suite';

test('Is the string capitalize', () => {
  expect(capitalize('hello')).toMatch(/^[A-Z][a-z]*$/);
});

test('Is the string reverted', () => {
  const input = 'Space';
  const output = input.split('').reverse().join('');

  expect(reverseString(input)).toBe(output);
});

test('Sum two numbers', () => {
  const inputX = 25;
  const inputY = 42;
  const output = inputX + inputY;

  expect(calculator.add(inputX, inputY)).toEqual(output);
});

test('Substract two numbers', () => {
  const inputX = 25;
  const inputY = 42;
  const output = inputX - inputY;

  expect(calculator.substract(inputX, inputY)).toEqual(output);
});

test('Divide two numbers', () => {
  const inputX = 25;
  const inputY = 42;
  const output = inputX / inputY;

  expect(calculator.divide(inputX, inputY)).toEqual(output);
});

test('Multiply two numbers', () => {
  const inputX = 25;
  const inputY = 42;
  const output = inputX * inputY;

  expect(calculator.multiply(inputX, inputY)).toEqual(output);
});

test('Caesar cipher xyz', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('Caesar cipher single string', () => {
  const input = 'hello';
  const output = 'khoor';

  expect(caesarCipher(input, 3)).toBe(output);
});

test('Caesar cipher sentence', () => {
  const input = 'hello, good morning';
  const output = 'khoor, jrrg pruqlqj';

  expect(caesarCipher(input, 3)).toBe(output);
});

test('Caesar cipher sentence with upper case letters', () => {
  const input = 'HeLLo';
  const output = 'KhOOr';

  expect(caesarCipher(input, 3)).toBe(output);
});

test('Caesar cipher all upper case letters', () => {
  const input = 'HELLO, GOOD MORNING';
  const output = 'KHOOR, JRRG PRUQLQJ'

  expect(caesarCipher(input, 3)).toBe(output);
});

test('Caesar cipher final', () => {
  const input = 'Hello, World!';
  const output = 'Khoor, Zruog!';

  expect(caesarCipher('Hello, World!', 3)).toBe(output);
});

test('Analyze array', () => {
  const input = [1,8,3,4,2,6];
  const output = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };

  expect(analyzeArray(input)).toEqual(output);
});