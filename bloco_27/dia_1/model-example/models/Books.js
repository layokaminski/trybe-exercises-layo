const connection = require('./connection');

const getAll = async () => {
  const [ books ] = await connection.execute(
    'SELECT title, author_id FROM model_example.books',
  );

  return books;
}

const getByAuthorId = async (id) => {
  const [ book ] = await connection.execute(
    `SELECT title, author_id FROM model_example.books WHERE author_id = ?`,
    [id]
  );

  if (!book) return null;

  return book;
}

module.exports = {
  getAll,
  getByAuthorId,
};