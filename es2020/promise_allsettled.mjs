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

// Implémentation de allSettled
await Promise.all(
  promises.map((p) => p
    .then((value) => ({ status: 'fulfilled', value }))
    .catch((reason) => ({ status: 'rejected', reason })))
  )