{ // const express = require('express');

// const app = express(); // 1

// app.get('/hello', handleHelloWorldRequest); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// function handleHelloWorldRequest(_req, res) {
//   res.status(200).send(' Alex é um cara lindo!'); // 4
// }
}

{ // const express = require('express');
// const app = express();

// /* Rota com caminho '/', utilizando o método GET */
// app.get('/', function (req, res) {
//   res.send('hello world');
// });

// /* Rota com caminho '/', utilizando o método POST */
// app.post('/', function (req, res) {
//   res.send('hello world');
// });

// /* Rota com caminho '/', utilizando o método PUT */
// app.put('/', function (req, res) {
//   res.send('hello world');
// });

// /* Rota com caminho '/', utilizando o método DELETE */
// app.delete('/', function (req, res) {
//   res.send('hello world');
// });

// /* Rota com caminho '/' para qualquer método HTTP */
// app.all('/', function (req, res) {
//   res.send('hello world');
// });

// /* Ou podemos encadear as requisições para evitar repetir o caminho */
// app
//   .route('/')
//   .get(function (req, res) {
//         // Requisições para rota GET `/` são resolvidas aqui!
//     res.send('hello world get');
//   })
//   .post(function (req, res) {
//         // Requisições para rota POST `/` são resolvidas aqui!
//     res.send('hello world post');
//   });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// }); 
}

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());


app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes.sort());
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => 
  r.name.includes(name) && 
  (r.price < parseInt(maxPrice) ||
  r.price >= parseInt(minPrice) ));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// ...
app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

app.get('/drinks', function (req, res) {
  res.json(drinks.sort((drinkA, drinkB)=>{
    return drinkA.name.localeCompare(drinkB.name)
  }));
});

app.get('/drinks/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredDrinks = drinks.filter((d) => 
  d.name.includes(name) && 
  (d.price < parseInt(maxPrice) ||
  d.price >= parseInt(minPrice) ));
  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});



