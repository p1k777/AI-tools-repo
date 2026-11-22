// Small demo module with a couple of intentional, easy-to-fix bugs.
// Functions: sum, average, clamp

export function sum(nums: number[]): number {
  // BUG: reduce without initial value throws on empty arrays
  // and can lead to unexpected behavior.
  return nums.reduce((a, b) => a + b);
}

export function average(nums: number[]): number | null {
  // BUG: For empty arrays this returns NaN instead of null.
  // Also relies on sum() behavior above.
  const total = sum(nums);
  return total / nums.length || null;
}

export function clamp(value: number, min: number, max: number): number {
  // Correct implementation (provided so not everything is broken)
  if (min > max) {
    // swap if bounds are inverted
    const t = min;
    min = max;
    max = t;
  }
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
