let pecaXadrez = 'CAVALO'

switch (pecaXadrez.toLowerCase()) {
    case 'cavalo':
        console.log('Movimento em L');
        break;
    case 'rainha':
        console.log('Movimentos em todas as direções');
        break;
    case 'rei':
        console.log('Movimento em todas as direções, mas apenas uma casa');
        break; 
    }
