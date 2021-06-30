const Books = require('../models/Books');
const Author = require('../services/Author');

const getAll = async () => await Books.getAll();

const findByAuthorId = async (author_id) => {
  const books = await Books.getByAuthorId(author_id);

  if (!books || books.length <= 0) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar livros para o autor com o id ${author_id}`,
      },
    };
  }

  return books;
}

const create = async (title, author_id) => {
  const author = await Author.findById(author_id);

  if (!title || title.length < 3) {
    return {
      error: {
        code: 'badRequest',
        message: 'Titulo deve existir e ter mais de três caracteres',
      },
    };
  }

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }

  return Books.create(title, author_id);
};

module.exports = {
  getAll,
  findByAuthorId,
  create,
};
