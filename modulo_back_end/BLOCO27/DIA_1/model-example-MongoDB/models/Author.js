// models/Author.js

const connection = require('./connection');
const { ObjectId } = require('mongodb');

// // Cria uma string com o nome completo do autor
// const getFullNameAuthor = (first_name, middle_name, last_name) => {
        
//   // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
//   // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
//   const fullName = [first_name, middle_name, last_name]
//     .filter(Boolean)
//     .join(' ');

//   return fullName;
// };

// // Converte o nome dos campos de snake_case para camelCase
// const serialize = ({ _id, first_name, middle_name, last_name }) => ({
//   id: _id,
//   firstName: first_name,
//   middleName: middle_name,
//   lastName: last_name,
//   fullName: getFullNameAuthor(first_name, middle_name, last_name),
// });

// Busca todos os autores do banco.
const getAll = async () => {
  return connection()
  .then((db) =>  db.collection('authors').find().toArray())
  .then((authors) => {
    return authors.map(({_id, firstName, middleName, lastName}) => {
      const getNewAuthor = {
        id: _id,
        firstName,
        middleName,
        lastName
      }
      return getNewAuthor;
    });
  });
}

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
      return null;
  }

  const authorData = await connection()
      .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  const getNewAuthor = { id, firstName, middleName, lastName }
  return getNewAuthor;
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) =>
    connection()
        .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
        .then(result =>  ({ id: result.insertedId, firstName, middleName, lastName }));

module.exports = {
    getAll,
    findById,
    isValid,
    create
};