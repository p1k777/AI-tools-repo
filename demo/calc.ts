// Small demo module with a couple of intentional, easy-to-fix bugs.
// Functions: sum, average, clamp

export function sum(nums: number[]): number {
  // Fix: provide initial value to handle empty arrays safely.
  return nums.reduce((a, b) => a + b, 0);
}

export function average(nums: number[]): number | null {
  // Fix: for empty arrays return null explicitly.
  if (nums.length === 0) return null;
  const total = sum(nums);
  return total / nums.length;
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
