const fetch = require('node-fetch');
const API_URL = 'https://dog.ceo/api/breeds/image/random';

const fetchDogImage = () => (
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.message)
);

module.exports = fetchDogImage;