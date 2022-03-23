const value = 0;

// Appliquer le traitement de one(), two(), three() puis four()

// 1 - variables intermédiaire 
let intermediate = one(value);
intermediate = two(intermediate);
intermediate = three(intermediate);
const result1 = four(intermediate);

// 2 - imbrication (lisibilité)
const result2 = four(three(two(one(value))));

// 3 - chaînage (problème d'applicabilité)
const result3 = value.one().two().three().four();

// 4 - opérateur pipeline |> ( | >)
// const result4 = value
//   |> one(%)
//   |> two(%)
//   |> three(%)
//   |> four(%)

// Exemple
const numbers = [1, 3, 8, 11, 14, 22, 29];
// const result = numbers
//   |> filter(%, (v) => v % 2 === 0)
//   |> map(%, (v) => v + 1)
//   |> slice(%, 0, 3)
//   |> Array.from

const result = Array.from(slice(map(filter(numbers), (v) => v % 2 === 0), (v) => v + 1), 0, 3);

function* filter(items, predicate) {
  for (const item of items)
    if (predicate(item)) yield item;
}

function* map(items, project) {
  for (const item of items) yield project(item)
}

function* slice(items, start, end) {
  for (let i = start; i < end; i++) yield items[i]
}