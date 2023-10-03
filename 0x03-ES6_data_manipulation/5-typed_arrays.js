// function that returns a new array buffer with an int8 value at a specific index
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  if (position >= length) {
    throw new Error('Position outside range');
  }
  view[position] = value;
  return new Int8Array(buffer);
}
