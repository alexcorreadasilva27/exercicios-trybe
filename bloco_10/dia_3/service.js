// function randomRgbColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   module.exports = { randomRgbColor };

const randoNumber = () => Math.floor(Math.random() * 101);

const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) => str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

module.exports = {randoNumber, firstFunction, secondFunction, thirdFunction};

