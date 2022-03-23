// Array.prototype.at
const phrase = "Ceci est une phrase courte quoiqu'alourdie par quelques mots superflus";

const mots = phrase.split(' ');

console.log(1, `Deuxième mot : "${mots[1]}"`);
console.log(2, `Troisième mot : "${mots.at(2)}"`);
console.log(3, `Pénultième mot : "${mots.at(-2)}"`);
console.log(4, `Dernier mot : "${mots.at(-1)}"`);
