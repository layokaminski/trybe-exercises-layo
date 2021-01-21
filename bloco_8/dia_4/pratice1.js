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

// Praticando com Parâmetro rest

function quantosParams(...args) {
  console.log('parâmetros:', args)
  return `Você passou ${args.length} parâmetros para a função.`;
};

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams("string", null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const sum = (...args) => {
  return args.reduce((accumulator, current) => accumulator + current, 0);
};
console.log(sum(4, 7, 8, 9, 60)); // 88