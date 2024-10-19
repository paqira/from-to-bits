import { describe, test, expect } from "@jest/globals";
import { fromBits, toBits } from "./from-to-bits.js";

describe("fromBits", () => {
  test("undefined", () => {
    expect(fromBits({ upper: Number.NaN, lower: 0 })).toBeUndefined();
    expect(fromBits({ upper: 0, lower: Number.NaN })).toBeUndefined();

    expect(fromBits({ upper: NaN, lower: 0 })).toBeUndefined();
    expect(fromBits({ upper: 0, lower: NaN })).toBeUndefined();

    expect(
      fromBits({ upper: Number.POSITIVE_INFINITY, lower: 0 }),
    ).toBeUndefined();
    expect(
      fromBits({ upper: 0, lower: Number.POSITIVE_INFINITY }),
    ).toBeUndefined();

    expect(
      fromBits({ upper: Number.NEGATIVE_INFINITY, lower: 0 }),
    ).toBeUndefined();
    expect(
      fromBits({ upper: 0, lower: Number.NEGATIVE_INFINITY }),
    ).toBeUndefined();

    expect(fromBits({ upper: 0x1_0000_0000, lower: 0 })).toBeUndefined();
    expect(fromBits({ upper: 0, lower: 0x1_0000_0000 })).toBeUndefined();

    expect(fromBits({ upper: -1, lower: 0 })).toBeUndefined();
    expect(fromBits({ upper: 0, lower: -1 })).toBeUndefined();
  });

  test("defined", () => {
    expect(fromBits({ upper: 0, lower: 0 })).toBe(0.0);
  });
});

describe("toBits", () => {
  test("±1", () => {
    expect(toBits(1.0)).toEqual({ upper: 0x3ff0_0000, lower: 0x0 });
    expect(toBits(-1.0)).toEqual({ upper: 0xbff00000, lower: 0x0 });
  });
});
