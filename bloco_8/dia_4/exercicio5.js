const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => { return names.reduce((accumulator,currentValue) => accumulator + currentValue.split('').reduce((acc,current) => {
  if (current === 'a' || current  === 'A') return acc + 1;
  return acc;
}, 0), 0)
} 
console.log(containsA());

assert.deepStrictEqual(containsA(), 20);