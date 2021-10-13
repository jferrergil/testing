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
    expect(isNaN === isNaN).toBe(true);
  });

  test('should be true 3 === 3', () => {
    expect(1 === 1).toBe(true);
  });
  test('should be true 3 === 3', () => {
    expect(strictEquals(NaN, NaN)).toBe(false);
  });
  test('should be true 3 === 3', () => {
    expect(strictEquals(0, -0)).toBe(true);
  });
  test('should be true 3 === 3', () => {
    expect(strictEquals(-0, 0)).toBe(true);
  });
  test('should be true 3 === 3', () => {
    expect(strictEquals(false, false)).toBe(true);
  });
  test('should be true 3 === 3', () => {
    expect(strictEquals(true, false)).toBe(false);
  });
  test('should be true 3 === 3', () => {
    expect(strictEquals('oil', 'terrible')).toBe(fasle);
  });
});
