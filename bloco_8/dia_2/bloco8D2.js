
// FOREACH/////////////////////////////////////////////////////////////////
// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
//   emailListInData.forEach((item, posicao, array) => {
//     showEmailList(item);
//     console.log(`Sua Posição é: ${posicao}.`);
//     console.log(`Quantidade total: ${array.length}`)
//   });
///////////////////////////////////////////////////////////////////////////

// FIND////////////////////////////////////////////////////////////////////
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (div) => div % 3 === 0 && div % 5 === 0;

// const isdiv = numbers.find(findDivisibleBy3And5);

// console.log(findDivisibleBy3And5(isdiv))
// console.log(isdiv);

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
// return names.find((name) => name.length === 5);
// }

// console.log(findNameWithFiveLetters());

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//    return musicas.find((musica) => musica.id === id);
//   }
  
//   console.log(findMusic('31031685'))
///////////////////////////////////////////////////////////////////////////

//SOME/////////////////////////////////////////////////////////////////////
// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('X', listNames)); // false

// const grades = {
//     portugues: 'Aprovado',
//     matematica: 'Reprovado',
//     ingles: 'Aprovado',
//   };
  
//   const verifyGrades = (studentGrades) => (
//     Object.values(studentGrades).every((grade) => grade === 'Aprovado')
//   );
  
//   console.log(verifyGrades(grades));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some((Names) => Names === name);

// console.log(hasName(names, 'Ana'));
///////////////////////////////////////////////////////////////////////////

//EVERY////////////////////////////////////////////////////////////////////
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);
   
//   console.log(verifyAges(people, 18));
///////////////////////////////////////////////////////////////////////////

//SORT/////////////////////////////////////////////////////////////////////
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   people.sort((personA, personB) => personA.age - personB.age);
//   people.sort((personA, personB) => personB.age - personA.age);
  
//   console.log(people);
//   console.log(people);
/////////////////////////////////////////////////////////////////////////

