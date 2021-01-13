// 1. Crie uma função que receba um número e retorne seu fatorial.

const factorial = num => {
  let result = 1

  for (let index = 2; index <= num; index += 1) {
    result *= index
  }
  return result
}

console.log(factorial(7));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggerWord = frase => {
  const arrayPhrase = frase.split(' ');
  let biggestWordPhrase = arrayPhrase[0];
  for (let index = 0; index < arrayPhrase.length; index += 1) {
    if (arrayPhrase[index].length > biggestWordPhrase.length) {
      biggestWordPhrase = arrayPhrase[index];
    }
  }
  return biggestWordPhrase;
}

console.log(biggerWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

/* 3. Crie uma página que contenha:

Um botão ao qual será associado um event listener;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. 

const button = document.querySelector('button');
let num = document.querySelector('span');
let clickCount = 0

button.addEventListener('click', () => {
  num.innerText = clickCount += 1;
}) */

/* 4. Crie um código JavaScript com a seguinte especificação:

Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string. */

const changeString = string => {
  let change = string.replace('x', 'Layo')
  return change
}

console.log(changeString('Tryber x aqui!'));

const skills = ['HTML', 'CSS', 'ES6', 'Mobile First', 'JavaScript']

const countainerSkills = (string, array) => {
  array.sort();

return `${string} Minhas cinco principais habilidades são: \n${array.join('\n')}  \n#goTrybe`
}

console.log(countainerSkills(changeString('Tryber x aqui!'), skills));
