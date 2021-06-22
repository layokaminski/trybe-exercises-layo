function numberNatural(number) {  
  if (number > 0) return 'positivo';
  
  if (number < 0) return 'negativo';

  return 'neutro';
}

numberNatural(0);

module.exports = numberNatural;