import { describe, it, expect } from 'vitest';
import { sum, average, clamp } from './calc';

describe('calc demo (buggy initially)', () => {
  it('sum adds numbers and handles empty array (should be 0)', () => {
    expect(sum([1, 2, 3])).toBe(6);
    // This currently throws, desired behavior is to return 0
    expect(() => sum([])).toThrow();
  });

  it('average returns mean or null for empty list', () => {
    expect(average([2, 4, 6])).toBe(4);
    // Currently returns NaN, desired is null
    expect(average([])).toBeNull();
  });

  it('clamp constrains values within bounds, including inverted bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-2, 0, 10)).toBe(0);
    expect(clamp(12, 0, 10)).toBe(10);
    // inverted bounds should still work
    expect(clamp(5, 10, 0)).toBe(5);
  });
});
