const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

function getJoker(joke) {
  const phrase = document.querySelector('p');
  phrase.innerText = joke
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => getJoker(data.joke));
};

window.onload = () => fetchJoke()