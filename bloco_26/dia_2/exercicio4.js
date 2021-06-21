const fs = require('fs').promises;

// PARTE 1
/* fs.readFile('simpsons.json', 'utf8')
  .then((response) => JSON.parse(response))
  .then((data) => data.map((personagem) => 
    console.log(`${personagem.id} - ${personagem.name}`))); */

// PARTE 2
/* async function searchId (idPersonagem) {
  const simpsons = await fs.readFile('simpsons.json', 'utf8')
  .then((response) => JSON.parse(response));

  const resolve = simpsons.find((personagem) => personagem.id == idPersonagem);

  if (!resolve) {
    throw new Error('id não encontrado');
  }

  return resolve;
}

searchId(25)
  .then((personagem) => console.log(personagem))
  .catch(err => console.log(err.message)); */