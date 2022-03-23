// chaînage optionnel
const object = {};

try {
object.innerObject.a;
} catch(err) { console.error(1, err.message); }

console.log(2, object.innerObject?.a);
console.log(3, object.innerObject && object.innerObject.a);

// association avec l'opérateur de coalescence
console.log(4, object.innerObject?.a ?? 'valeur par défaut');

// chaînage optionnel en accès de tableau
console.log(5, object.array?.[0]);

// chaînage optionnel lors d'accès à des innerObjectriétés grâce à des expressions
const prop = 'myProperty';
console.log(6, object.innerObject?.[prop]);

// chaînage optionnel sur les appels de fonctions
console.log(7, object.myFunction?.()) // ≈ object.myFunction && object.myFunction()

object.myFunction = () => { 
  console.log('Bonjour, je suis myFunction()'); 
  return 42;
};
console.log(8, object.myFunction?.()) 