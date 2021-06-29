// /////////////////////////////////////SPREAD///////////////////////////////////////////////////////////////////////////////
// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['banana', 'maçã', 'morango'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['uva', 'goiaba', 'acerola'];

// const fruitSalad = (fruit, additional) => {
//   const mixerSaladFruit = [...fruit, ...additional];
//   return mixerSaladFruit;
// };

// console.log(fruitSalad(specialFruit, additionalItens));
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////REST////////////////////////////////////////////////////////////////////////////

// function quantosParams(...args) {
//     console.log('parâmetros:', args);
//     return `Você passou ${args.length} parâmetros para a função.`;
//   }
  
//   console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
//   console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60)); // 88
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////ARRAY DESTRUCTURING////////////////////////////////////////////////

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// // saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring
// const [saudacao, realizaSaudacao] = saudacoes;

// console.log(realizaSaudacao(saudacao)); // Olá
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// [comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
// console.log(comida, animal, bebida); // arroz gato água
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [1, 3, 5, 6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////DEFAULT DESTRUCTURING///////////////////////////////////////////////////////////

// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
//   };
  
//   const { nationality } = person;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
//   };
  
//   const { nationality = 'Brazilian' } = person;
//   console.log(nationality); // Brazilian
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// const { nationality = "Brazilian" } = person;

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person)); // João is Brazilian
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////Object Property Shorthand////////////////////////////////////////////////////
// const newUser = (id, name, email) => {
//     return {
//       id: id,
//       name: name,
//       email: email,
//     };
//   };
  
//   console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// const newUser = (id, name, email) => {
//     return {
//       id,
//       name,
//       email,
//     };
//   };
  
//   console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const getPosition = (latitude, longitude) => ({
//     latitude,
//     longitude});
  
//   console.log(getPosition(-19.8157, -43.9542));

//   const getPosition = (latitude, longitude) => ({
//     latitude: latitude,
//     longitude: longitude});
  
//   console.log(getPosition(-19.8157, -43.9542));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////Default Parameters//////////////////////////////////////////////////////////

// const multiply = (number, value = 1) => {
//     // Escreva aqui a sua função
//     return number * value
//   };
  
//   console.log(multiply(8));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

