 /*
 Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
 - document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function changeText() {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerText = 'Daqui dois anos, me vejo trabalhando com programação dentro de um otima empresa!';
}
changeText();

function changeColorSquareToGreen() {
    let square = document.getElementsByClassName('main-content')[0];
    square.style.backgroundColor = 'rgb(76,164,109)';
}
changeColorSquareToGreen();

function changeColorSquareToWhite() {
    let square = document.getElementsByClassName('center-content')[0];
    square.style.backgroundColor = 'rgb(255,255,255)';
}
changeColorSquareToWhite();

function changeTextTitle() {
    let text = document.getElementsByClassName('title')[0];
    text.innerText = 'Exercício 5.1 - JavaScript'
    
}
changeTextTitle();

        