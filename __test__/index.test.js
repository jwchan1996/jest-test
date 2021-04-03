const { sum } = require('../src/index')

test('test sum', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(2, 2)).toBe(4)
})