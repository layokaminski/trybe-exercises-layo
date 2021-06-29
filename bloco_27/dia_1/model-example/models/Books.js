const connection = require('./connection');

const getAll = async () => {
  const [ books ] = await connection.execute(
    'SELECT title, author_id FROM model_example.books',
  );

  return books;
}

const getByAuthorId = async (id) => {
  const [ book ] = await connection.execute(
    `SELECT title, author_id FROM model_example.books WHERE ${id} = author_id`,
  );

  return book;
}

module.exports = {
  getAll,
  getByAuthorId,
};