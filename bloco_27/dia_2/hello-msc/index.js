// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');
const Books = require('./controllers/Books');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/books', Books.getAllBooks);
app.get('/books/:id', Books.findById);
app.get('/authors/:id', Author.findById);
app.post('/books', Books.create);
app.post('/authors', Author.create);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
