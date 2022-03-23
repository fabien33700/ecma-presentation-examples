// Object.fromEntries()

const object = {
  a: 42,
  b: 'test',
  c: [1, 4, 9],
};

const entries = Object.entries(object);

console.log(entries);
console.log(Object.fromEntries(entries));

// Map from an object
const map = new Map(entries);
console.log(map);

// Object from map
console.log(Object.fromEntries(map.entries()));
