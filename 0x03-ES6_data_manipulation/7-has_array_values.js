export default function hasValuesFromArray(set, array) {
  for (const elemt of array) {
    if (!set.has(elemt)) {
      return false;
    }
  }

  return true;
}
