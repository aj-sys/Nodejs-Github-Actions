// __tests__/index.test.js
const greet = require('../index');

test('greet function returns proper greeting', () => {
  expect(greet('Ajara')).toBe('Hello, Ajara!');
});
