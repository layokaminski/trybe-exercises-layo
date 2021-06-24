const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const HTTP_UNAUTHORIZED = 401;

const users = [
  {
    id: 2,
    user: 'marcos',
    isActive: true
  },
  {
    id: 3,
    user: 'paulo',
    isActive: true

  },
   {
    id: 4,
    user: 'roger',
    isActive: false
  }
];

const app = express();

app.use(bodyParser.json());

const findUser = (req, res, next) => {
  const { status } = req.body;
  const { id } = Number(req.params.id);

  const findIndexUser = users.findIndex(({ id: idUser }) => idUser === id);

  if (findIndexUser === -1) {
    return res.status(HTTP_UNAUTHORIZED)
    .json({ message: `user isn't found`});
  }

  users[findIndexUser].isActive = status;

  next();
}

app.get('/user/:id', findUser, (req, res) => {
  const { status } = req.body;
  const { id } = Number(req.params.id);

  if (typeof status != 'boolean') {
    return res.status(HTTP_UNAUTHORIZED)
      .json({ message: `status isn't a boolean`});
  }

});

app.listen(PORT, () => {
  console.log(`Aplicação na porta ${PORT}`);
});
