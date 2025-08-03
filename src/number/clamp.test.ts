import { describe, it, expect } from "vitest";
import { clamp } from "./clamp";

describe("Clamp a number value", () => {
  it("should be return a clamped number value", () => {
    const res = clamp(15, 0, 10);

    expect(res).toBe(10);
  });
});
