let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

/*Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".*/

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

/*Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".*/

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por 6 vezes');
console.table(player.bestInTheWorld);



console.log('A jogadora possui 2 medalhas de ouro e 3 medalhas de prata');
console.table(player.medals);
