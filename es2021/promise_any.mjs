// 1 - Promise.any()
let promises = [
  Promise.resolve(`Sonic`),
  new Promise((resolve) => setTimeout(() => { resolve('Knuckles') }), 100),
  new Promise((resolve) => setTimeout(() => { resolve('Tails') }), 500),
];

const faster = await Promise.any(promises);
console.log(1, `And the winner is ̀${faster}`);

// 3 - AggregateError
promises = [
  Promise.reject(new Error('Hit a wall')),
  Promise.reject(new Error('Engine failure')),
  Promise.reject(new Error('Out of gas')),
];

try {
  await Promise.any(promises);
} catch (err) {
  console.error(2, 'No one finished', err, err.errors);
}
