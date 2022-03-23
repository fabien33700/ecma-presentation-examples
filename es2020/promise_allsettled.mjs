// 1 - Promise.all()
let promises = [
  Promise.resolve('First task'),
  Promise.reject(new Error('Second task, error')),
  Promise.resolve('Third task'),
];

try {
  await Promise.all(promises);
} catch (err) { 
  console.error(1, `One of the promise failed : ${err.message}`);
}

// 2 - Promise.allSettled()
const results = await Promise.allSettled(promises);
console.log(2, results);