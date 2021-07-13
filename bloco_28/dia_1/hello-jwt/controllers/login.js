const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const login = (req, res, _next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({ message: 'User ou Password invalidos' });
  }

  const payload = {
    username: req.body.username,
    admin: false,
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = login;
