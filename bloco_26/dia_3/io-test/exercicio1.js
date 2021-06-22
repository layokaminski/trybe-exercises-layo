function numberNatural(number) {  
  if (typeof(number) === 'string') return 'o valor deve ser um número';

  if (number > 0) return 'positivo';
  
  if (number < 0) return 'negativo';

  return 'neutro';
}

module.exports = numberNatural;