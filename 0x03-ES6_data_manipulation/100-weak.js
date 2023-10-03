// export a const instance of WeakMap and name it 'weakMap'
// export a new function named queryAPI, it should accept one argument named endpoint

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
}

