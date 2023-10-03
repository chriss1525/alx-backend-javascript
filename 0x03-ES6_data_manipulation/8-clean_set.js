// function tha returns a string of all the set values that start with a specific string
export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  });
  return result.slice(0, -1);
}
