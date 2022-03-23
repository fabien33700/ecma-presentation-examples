// Array.prototype.flat()
const array = [1, [2, [3, [4]]]];
console.log(1, array.flat());
console.log(2, array.flat(2));
console.log(3, array.flat(3));

// Array.prototype.flatMap()
const sentences = `
  Hello, comment ça va ?
  Oui, ça va, je te remercie
`;
const words = sentences.split('\n')
  .flatMap(sentence => sentence.split(' '))
  .filter(word => word);
console.log(4, words);


