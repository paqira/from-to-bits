export type Bits = {
  /** Upper 32bits */
  upper: number;
  /** Lower 32bits */
  lower: number;
};

export const fromBits = (x: Bits): number | undefined => {
  const U32_MIN = 0x0;
  const U32_MAX = 0xffff_ffff;

  const BYTES = 8;
  const ORIGIN = 0;
  const OFFSET = 4;
  const LITTEL_ENDIAN = false;

  const upper = x.upper;
  const lower = x.lower;
  if (
    upper === undefined ||
    lower === undefined ||
    upper != upper ||
    lower != lower ||
    upper < U32_MIN ||
    U32_MAX < upper ||
    lower < U32_MIN ||
    U32_MAX < lower
  ) {
    return undefined;
  }

  const buffer = new ArrayBuffer(BYTES);
  const view = new DataView(buffer);

  view.setUint32(ORIGIN, upper, LITTEL_ENDIAN);
  view.setUint32(OFFSET, lower, LITTEL_ENDIAN);
  return view.getFloat64(ORIGIN, LITTEL_ENDIAN);
};

export const toBits = (x: number): Bits => {
  const BYTES = 8;
  const ORIGIN = 0;
  const OFFSET = 4;
  const LITTEL_ENDIAN = false;

  const buffer = new ArrayBuffer(BYTES);
  const view = new DataView(buffer);

  view.setFloat64(ORIGIN, x, LITTEL_ENDIAN);
  return {
    upper: view.getUint32(ORIGIN, LITTEL_ENDIAN),
    lower: view.getUint32(OFFSET, LITTEL_ENDIAN),
  };
};

export default { toBits, fromBits };
