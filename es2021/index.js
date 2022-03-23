// Opérateurs d'affectation logiques
a = a && b;
a &&= b;
a && (a = b)

a = a || false
a ||= false;
a || (a = b)

a = a ?? b
a ??= b
a ?? (a = b)

// Séparateur numérique
const million = 1000000;
const million_10 = 10 ** 6;
const million_lisible = 1_000_000;

const hex = 0xFF_CA_EB;
const bits = 0b11110000_00001111_01010101_10101010;
const decimal = 6.105_345_21e23;