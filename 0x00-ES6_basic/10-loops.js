export default function appendToEachArrayValue(array, appendString) {
    let i = 0;
    for (let item of array) {
      array[i] = appendString + item;
      i++;
    }
    return array;
  }
  