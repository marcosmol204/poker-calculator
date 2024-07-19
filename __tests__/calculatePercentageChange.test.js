import { describe, it, expect } from "vitest";
import { calculatePercentageChange } from "../src/logic";
describe("calculatePercentageChange", () => {
  it("should return positive percentage change when current is greater than bought", () => {
    const current = 150;
    const bought = 100;
    expect(calculatePercentageChange(current, bought)).toBe("+50.00%");
  });

  it("should return negative percentage change when current is less than bought", () => {
    const current = 80;
    const bought = 100;
    expect(calculatePercentageChange(current, bought)).toBe("-20.00%");
  });

  it("should handle zero current value", () => {
    const current = 0;
    const bought = 100;
    expect(calculatePercentageChange(current, bought)).toBe("-100.00%");
  });

  it("should handle zero bought value", () => {
    expect(() => calculatePercentageChange(100, 0)).toThrow(
      "The 'bought' value cannot be zero"
    );
  });

  it("should return zero percentage change when current and bought are equal", () => {
    const current = 100;
    const bought = 100;
    expect(calculatePercentageChange(current, bought)).toBe("0.00%");
  });
});
