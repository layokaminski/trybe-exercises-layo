const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books',
  );

  return books;
}

const getByAuthorId = async (id) => {
  const [book] = await connection.execute(
    `SELECT title, author_id FROM model_example.books WHERE author_id = ?`,
    [id]
  );

  if (!book) return null;

  return book;
}

const isValid = async (title, author_id) => {

  if (!title || title.length < 3) return false;

  if (!(await Author.findById(author_id))) return false;

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