// const promise = new Promise((resolve, reject) => {
//     const number = Math.floor(Math.random()* 11);
  
//     if (number <= 5) {
//       return reject(number);
//     }
//     resolve(number);
//   })
//   .then(number => `Que sucesso =) nosso número foi ${number}`)
//   .then(msg => console.log(msg))
//   .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fetch = require('node-fetch');

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fetch = require('node-fetch');

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }

// function sendJokeToFriend(name) {
//   const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .catch((err) => err);
//   console.log(message);
// }

// sendJokeToFriend("Anna");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fetch = require('node-fetch');

// async function verifiedFetch(url) {
//   if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//     return fetch(url)
//       .then((r) => r.json())
//       .then((r) => r.value);
//   }
//   throw new Error('endpoint não existe');
// }

// function sendJokeToFriend(name) {
//   const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .catch((err) => err);
//   console.log(message);
// }

// sendJokeToFriend("Anna");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fetch = require('node-fetch');

// async function verifiedFetch(url) {
//   if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//     return fetch(url)
//       .then((r) => r.json())
//       .then((r) => (r.value));
//   }
//   throw new Error('endpoint não existe');
// }

// async function sendJokeToFriend(name) {
//   const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .catch((err) => err);
//   console.log(message);
// }

// sendJokeToFriend("Anna");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fetchPromise = () => {
//     const myPromise = new Promise((resolve, reject) => {
//       const myArray = Array.from(
//         { length: 10 },
//         () =>  Math.floor(Math.random() * 50) + 1
//       );
//       const sum = myArray.map(number => number * number)
//                          .reduce((sum, number) => sum + number);
  
//       (sum < 8000) ? resolve() : reject();
//     });
  
//     myPromise
//       .then(() => console.log('Promise resolvida'))
//       .catch(() => console.log('Promise rejeitada'));
//   };
  
//   fetchPromise();
/////////////////////////////////////////////////////////////////

// const fetchPromise = () => {
//     const myPromise = new Promise((resolve, reject) => {
//       const myArray = Array.from(
//         { length: 10 },
//         () =>  Math.floor(Math.random() * 50) + 1
//       );
//       const sum = myArray.map(number => number * number)
//                          .reduce((number, acc) => number + acc, 0);
  
//       (sum < 8000) ? resolve(sum) : reject();
//     });
  
//     myPromise
//       .then(sum => [2, 3, 5, 10].map(number => sum / number))
//       .catch(() => console.log('Promise rejeitada'));
//   };
  
//   fetchPromise();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fetchPromise = () => {
//     const myPromise = new Promise((resolve, reject) => {
//       const myArray = Array.from(
//         { length: 10 },
//         () =>  Math.floor(Math.random() * 50) + 1
//       );
//       const sum = myArray.map(number => number * number)
//                          .reduce((number, acc) => number + acc, 0);
  
//       (sum < 8000) ? resolve(sum) : reject();
//     });
  
//     myPromise
//       .then(sum => [2, 3, 5, 10].map(number => sum / number))
//       .catch(() =>
//         console.log('É mais de oito mil! Essa promise deve estar quebrada!')
//       );
//   };
  
//   fetchPromise();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fetchPromise = () => {
//     const myPromise = new Promise((resolve, reject) => {
//       const myArray = Array.from(
//         { length: 10 },
//         () =>  Math.floor(Math.random() * 50) + 1
//       );
//       const sum = myArray.map(number => number * number)
//                          .reduce((number, acc) => number + acc, 0);
  
//       (sum < 8000) ? resolve(sum) : reject();
//     });
  
//     myPromise
//       .then(sum => [2, 3, 5, 10].map(number => sum / number))
//       .then(array => array.reduce((number, acc) => number + acc, 0))
//       .catch(() =>
//         console.log('É mais de oito mil! Essa promise deve estar quebrada!')
//       );
//   };
  
//   fetchPromise();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sumRandomNumbers = () => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
      .reduce((number, acc) => number + acc, 0);
  
    if (sum >= 8000) {
      throw new Error();
    }
  
    return sum;
  }
  
  const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
    .reduce((number, acc) => number + acc);
  
  const fetchPromise = async () => {
    try {
      const sum = await sumRandomNumbers();
      const sumFromSum = await sumArrayFromSum(sum);
    } catch (error) {
      console.log('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  }
  
  fetchPromise();