/* function testingScope(escopo) { 
  if (escopo === true) { 
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

// Utilizei a função comentada acima para refatorar como uma arrow function abaixo

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  /* Por conta da variavel ifScope ter sido declarada dentro do escopo do if, ela não vaza para esse console.log que dá erro
  console.log(`${ifScope} o que estou fazendo aqui ? :O`) */
};

testingScope(true)
