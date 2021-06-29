// index.js
const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();
app.use(bodyParser.json());

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

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/books/:id', async (req, res) => {
  const id = req.params.id

  const book = await Books.getByAuthorId(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Books.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Books.create(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso! '});
})

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
