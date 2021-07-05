require('dotenv').config();
const express = require('express');
const Ping = require('./controllers/Ping');
const CepController = require('./controllers/CepController');
const error = require('./middlewares/error');

const app = express();

app.get('/ping', Ping.getMessage);

app.get('/cep/:cep', CepController.getCep);

app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
