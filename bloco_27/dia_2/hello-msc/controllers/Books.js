const rescue = require('express-rescue');
const Books = require('../services/Books');
const Joi = require('joi');

const getAllBooks = rescue(async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

const findById = rescue(async (req, res) => {
  const { id } = req.params;

  const book = await Books.findByAuthorId(id);

  res.status(200).json(book);
});

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.string().not().empty().required(),
  })
    .validate(req.body);

  if (error) return next(error);

  const { title, author_id } = req.body;

  const newBook = await Books.create(title, author_id);

  if (newBook.error) return next(newBook.error);

  res.status(201).json(newBook);
});

module.exports = {
  getAllBooks,
  findById,
  create,
};