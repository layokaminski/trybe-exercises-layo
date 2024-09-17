const express = require('express');

const app = express();

const PORT = 3000;

const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"]
  }
]

const getByUser = (req, res, next) => {
  const query = req.query.q;
  const userFilter = req.query.user;

  if (!query) {
    return next();
  }

  const searchUser = users.find(({ user }) => userFilter === user).id;
  const filteredUser = users.find(({ id }) => searchUser === id).comments;

  return res.status(200).json(filteredUser);
} 

app.get('/comments', getByUser, (_req, res) => {
  const allComments = users
    .reduce((acc, { comments }) => [...acc, ...comments], []);

  return res.status(200).json(allComments);
});

app.listen(PORT, () => {
  console.log(`Aplicação na porta ${PORT}`);
});
