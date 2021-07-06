// setTimeout(() => {
//     console.log('Comprar parafusos') // Comprar parafusos
//     console.log('Adicionar ao estoque') // Adicionar ao estoque
//   }, 2000);
  
//   console.log('1 - Receber roda'); // 1 - Receber roda
//   console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
//   console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepStrictEqual(numbers, [1, 2, 3]); // essa validação falha
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const assert = require('assert');

// const pushNumber = (list, number) => {
//   list.push(number);
//   console.log(list);
// };

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const myExpenses = [
//     {
//       gym: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       phone: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];
  
//   const myIncome = 1000;

//   const monthlyBudget = (myIncome, myExpenses, callback) => {

//     const totalExpenses = callback(myExpenses);
//     const totalAfterExpenses = myIncome - totalExpenses;
  
//     console.log(`Balanço do mês:
//       Recebido: R$${myIncome},00
//       Gasto: R$${totalExpenses},00
//       Saldo: R$${totalAfterExpenses},00 `);
//   };

//   const handleExpenses = myExpenses => {
//     const eachValue = myExpenses.map((item) => Object.values(item)[0]);
//     const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
//     return totalExpense;
//   };
  
//   monthlyBudget(myIncome, myExpenses, handleExpenses);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const assert = require('assert');
// const { callbackify } = require('util');

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = callback => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return callback(userToReturn);
// };

// assert.strictEqual(getUser(userFullName ), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
// assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = callback => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian",
//     };
//     console.log(callback(user));
//   }, delay());
// };

// getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const countryName = ({ name }) => console.log(`Returned country is ${name}`);
// const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

// const getCountry = (onSuccess, onError) => {
//   setTimeout(() => {
//     const didOperationSucceed = Math.random() >= 0.5;
//     if(didOperationSucceed) {
//       const country = {
//         name: "Brazil",
//         hdi: 0.759,
//         currency: "Real",
//       };
//       onSuccess(country);
//     }
//     else {
//       const errorMessage = "Country could not be found";
//       onError(errorMessage);
//     }
//   }, delay());
// };

// // Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryName, printErrorMessage);

// // Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
// getCountry(countryCurrency, printErrorMessage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let timeA = 1000;
// let timeB = 500;
// let numA = 4;
// let numB = 6;
// let numC = 2;

// const sum = (a,b) => a+b;

// setTimeout(() => {
//     numC = sum(numA,numB);
//     console.log(numC);
// }, timeA);

// console.log(numC);

// setTimeout(() =>{
//     console.log(sum(numA,numC) === numB);
// }, timeB);  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); //1. A
// console.log(planetDistanceFromSun(venus)); //2. B
// console.log(planetDistanceFromSun(jupiter)); //3. C
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); //1. A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); //3. B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); //2. C
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const getPlanet = () => {
//     const mars = {
//       name: "Mars",
//       distanceFromSun: {
//         value: 227900000,
//         measurementUnit: "kilometers",
//       },
//     };
//     setTimeout(() =>  console.log("Returned planet: ", mars),4000);
//   };
  
  
//   getPlanet(); // imprime Marte depois de 4 segundos
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const sendMarsTemperature =  () => {
//     const temperaturaAtual = getMarsTemperature();
//     setTimeout(() => console.log(`Mars temperature is: ${temperaturaAtual} degree Celsius`),messageDelay());
// };


// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
// const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
// const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const sendMarsTemperature =  (onSucess) => {
//     const temperaturaAtual = getMarsTemperature();
//     setTimeout(() => onSucess(temperaturaAtual),messageDelay());
// };


// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
// const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
// const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// const sendMarsTemperature =  (onSucess, onError) => {
//     const temperaturaAtual = getMarsTemperature();
//     const taxaSucessoEnvio = Math.random() <= 0.6;
//     setTimeout(() => {
//     if (taxaSucessoEnvio) onSucess(temperaturaAtual)
//     else onError('Robot is busy');
// }, messageDelay());
// };


// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);


