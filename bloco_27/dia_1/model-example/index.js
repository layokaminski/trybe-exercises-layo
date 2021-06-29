// index.js
const express = require('express');
const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
  const id = req.params.id

  const book = await Books.getByAuthorId(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});


app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
