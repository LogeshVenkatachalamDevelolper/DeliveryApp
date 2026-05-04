import { add } from './math.utils';

describe('add function', () => {
  test('adds multiple numbers', () => {
    expect(add(1, 2, 3)).toBe(6);
  });

  test('works with single number', () => {
    expect(add(5)).toBe(5);
  });

  test('returns 0 when no arguments', () => {
    expect(add()).toBe(0);
  });

  test('handles negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});
