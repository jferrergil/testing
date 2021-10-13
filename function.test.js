// import { strictEquals, myName } from './function.js';

function strictEquals(a, b) {
  let result = Object.is(a, b);
  if (Number.isNaN(a) && Number.isNaN(b)) {
    result = false;
  } else if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    result = true;
  }
  return result;
}

describe('testing strictEqueals', () => {
  test('should be true 3 === 3', () => {
    expect(3 === 3).toBe(true);
  });
});
