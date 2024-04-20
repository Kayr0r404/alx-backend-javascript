function createInt8TypedArray(length, position, size) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a view of the buffer as Int8Array
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = size;

  return buffer;
}

export default createInt8TypedArray;
