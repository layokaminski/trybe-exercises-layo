const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
}

const getByAuthorId = async (id) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray())
}

const isValid = async (title, author_id) => {

  if (!title || title.length < 3) return false;

  const author = await Author.findById(author_id);

  if (author.length <= 0) return false;

  return true;
}

const create = async (title, author_id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, author_id],
);

module.exports = {
  getAll,
  getByAuthorId,
  isValid,
  create,
};