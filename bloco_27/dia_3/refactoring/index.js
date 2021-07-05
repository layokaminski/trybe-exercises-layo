require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
