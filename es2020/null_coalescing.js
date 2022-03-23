// coalescence des nuls
Boolean(false);
Boolean(undefined);
Boolean(null);
Boolean(0);
Boolean('');
Boolean(NaN);

let montant = 10
console.log(1, montant || 'pas de montant');

montant = 0;
console.log(2, montant || 'pas de montant');

console.log(3, montant ?? 'pas de montant');