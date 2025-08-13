import { describe, it, expect } from "vitest";
import { clamp } from "../../../number/clamp";

describe("Test clamp handler", () => {
  it("should be return a clamped number value", () => {
    const res = clamp(15, 0, 10);

    expect(res).toBe(10);
  });
});
