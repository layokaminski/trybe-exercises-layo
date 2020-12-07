// Instruções (leia tudo)
// Você tem dois quadrados, com nomes de Caixa 1 e Caixa 2, quando clicar na Caixa 1, a cor da Caixa 2 deve ser trocada para ciano.
// Altere apenas o JavaScript, criando o event listener adequado.

const caixaUm = document.querySelector(".caixa1");
const caixaDois = document.querySelector(".caixa2");

function trocaCor() {
  caixaDois.style.backgroundColor = "cyan";
}
//Crie seu event listener abaixo:
caixaUm.addEventListener('dblclick', trocaCor);

// Instruções (leia tudo)
// Escreva o nome de uma cor na caixa (em inglês) e depois clique fora da caixa de texto em qualquer lugar, o evento usado foi o change e ele vai mudar a cor do quadrado aqui do lado direito:
// Esse exemplo demonstra que devemos encontrar o melhor evento para nossos listeners, estamos tendo que clicar fora da caixa após digitar a cor, por conta de estarmos utilizando um evento que não é o melhor para esse tipo de trabalho.
// Experimente na aba JS aqui mesmo, trocar o evento 'change', pelo evento 'keyup' e teste novamente.

const inputTexto = document.querySelector("#input-texto");
const divQuadrado = document.querySelector(".quadrado");

function corQuadrado() {
  divQuadrado.style.backgroundColor = inputTexto.value;
}

inputTexto.addEventListener("change", corQuadrado);

// Instruções (leia tudo)
// Novamente dois quadrados, com nomes de Caixa 1 e Caixa 2:
// Ao clicar uma vez na Caixa 1, a cor da Caixa 2 deve ser trocada para azul.
// Ao dar um clique-duplo na Caixa 2, a Caixa 1 deve ser trocada para vermelho e a Caixa 2 para amarela.
// Altere apenas o JavaScript, criando o event listener adequado e caso precise, visite o link com todos os elementos.

const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');

function changeColors () {
  caixaUm.style.backgroundColor = 'red';
  caixaDois.style.backgroundColor = 'yellow';
}
function trocaCor () {
  caixaDois.style.backgroundColor = 'blue';
}
//Crie seu event listener abaixo:
caixaUm.addEventListener('click', trocaCor);

caixaDois.addEventListener('dblclick', changeColors);

// Instruções (leia tudo)
// Agora, uma caixa de texto e dois quadrados, as instruções são as seguintes:
// Ao digitar alguma coisa na caixa de texto, o texto da caixa 1 seja alterado para o que foi escrito dentro da caixa letra a letra, enquanto você digita.
// Ao clicar em qualquer lugar fora da caixa de texto após digitar alguma coisa na mesma, o texto da Caixa 2 seja alterado.
// Altere apenas o JavaScript, criando o event listener adequado e caso precise, visite o link com todos os elementos.

const caixaTexto = document.querySelector('.caixa-texto');
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');

function trocaTextoA () {
  caixaUm.innerText = caixaTexto.value;
}
function trocaTextoB () {
  caixaDois.innerText = caixaTexto.value;
}
//Crie seu event listener abaixo:
caixaTexto.addEventListener ('keyup', trocaTextoA);

caixaTexto.addEventListener ('change', trocaTextoB);

// Instruções (leia tudo)
// Agora, uma caixa de texto, dois quadrados e dois botões, as instruções são as seguintes:
// Ao passar o mouse no botão, troque a cor da caixa correspondente para verde.
// Ao clicar no botão, troque o texto da caixa correspondente para o que estiver escrito na caixa de texto.
// Mostre um alerta quando o usuário colar alguma informação dentro da caixa de texto escrito: "Go Trybe!"
// Altere apenas o JavaScript, criando todo o necessário para o event listener funcionar adequadamente.

//Crie seu código abaixo dessa linha:
const caixaTexto = document.querySelector('.caixa-texto');
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');
const botaoUm = document.querySelector('.botao1');
const botaoDois = document.querySelector('.botao2');

function trocaCor () {
  caixaUm.style.backgroundColor = 'green';
}

function trocaTextoB () {
  caixaDois.innerText = caixaTexto.value;
}

function eventText () {
  alert('Go Trybe!')
}

//Eventos
botaoUm.addEventListener('mouseover', trocaCor)

botaoDois.addEventListener('click', trocaTextoB)

caixaTexto.addEventListener('keyup', eventText);