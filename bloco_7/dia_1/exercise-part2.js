// Crie uma função que receba um número e retorne seu fatorial.

const factorial = num => {
  let result = 1

  for (let index = 2; index <= num; index += 1) {
    result *= index
  }
  return result
}

console.log(factorial(7));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggerLetter = frase => {
  const arrayFrase = frase.split(' ');
  let maior = arrayFrase[0];
  for (let index = 0; index < arrayFrase.length; index += 1) {
    if (arrayFrase[index].length > maior.length) {
       maior = arrayFrase[index];
    } 
  }
  return maior;
}

console.log(biggerLetter("Antônio foi no banheiro e não sabemos o que aconteceu"))

/* Crie uma página que contenha:

Um botão ao qual será associado um event listener;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada. */

const button = document.querySelector('button');
let num = document.querySelector('span');
let clickCount = 0

button.addEventListener('click', () => {
  num.innerText = clickCount += 1;
})
