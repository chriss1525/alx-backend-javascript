// function that returns a boolean if all elements in the array exist within a set
export default function hasValuesFromArray(set, array) {
  return array.every((item) => set.has(item));
}
