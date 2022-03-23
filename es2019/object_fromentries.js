const object = {
  a: 42,
  b: 'test',
  c: [1, 4, 9],
};

const entries = Object.entries(object);

console.log(1, 'entries', entries);
console.log(2, 'object from entries', Object.fromEntries(entries));

// Map from an object
const map = new Map(entries);
console.log(3, 'map from entries', map);

// Object from map
console.log(4, 'map entries', Object.fromEntries(map.entries()));
