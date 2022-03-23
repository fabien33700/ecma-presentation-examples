const object = { 
  a: 5,
  b: 'string',
  c: true,
};

const { a, ...rest } = object;
console.log(1, 'a', a);
console.log(2, 'rest', rest);

const defaults = { d: 10, b: 'default' }
const merged = { ...defaults, ...object }
console.log(3, 'merged', merged);