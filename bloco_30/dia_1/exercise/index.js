const express = require("express");
const app = express();
const plants = require("./plants.js");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/plants', (_req, res) => {
  res.status(200).json(plants.getPlants());
});


app.listen(3000, () => console.log('ta on!'))