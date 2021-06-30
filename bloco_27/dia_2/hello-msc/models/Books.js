const connection = require('./connection');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

const getByAuthorId = async (id) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray())
}

const create = (title, author_id) => connection()
    .then((db) => db.collection('books').insertOne({ title, author_id }))
    .then((result) => ({ id: result.insertedId, title, author_id }));

module.exports = {
  getAll,
  getByAuthorId,
  create,
};
