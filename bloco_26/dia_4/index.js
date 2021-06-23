const express = require('express');
const bodyParser = require('body-parser');

const MINIMUM_AGE = 17;

const HTTP_UNAUTHORIZED = 401; 

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  
  if (Number(age) > MINIMUM_AGE) {
    return res.status(200).json({ message: `Hello, ${name}` });
  }

  res.status(HTTP_UNAUTHORIZED).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(3000, () => {
  console.log('Aplicação na porta 3000');
});
