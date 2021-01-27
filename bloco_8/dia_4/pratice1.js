// Praticando com spread operator

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Alface', 'Tomate', 'Brocolis'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Azeitona', 'Cebola Roxa', 'Pepino'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
