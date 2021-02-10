const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.age === age);
      if (animal) {
        return resolve(animal);
      };

      return reject({ error: 'Nenhum animal com essa idade!' });
    }, 100);
  })
);

const getAnimal = (age) => {
  // Adicione o código aqui.
  return findAnimalByAge(age).then(animal => animal);
};
// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual({ error: 'Nenhum animal com essa idade!' })
      );
    });
  });
});