const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (object, key, value) => {
  object[key] = value
}

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

addTurn(lesson2, 'turno', 'manhã');

console.log(lesson2);

// 2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = object => Object.keys(object);

console.log(listKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const sizeObject = object => Object.keys(object).length;

console.log(sizeObject(lesson1));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = object => Object.values(object);

console.log(listValues(lesson3));

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

/*const allLessons = {
  lesson1: Object.assign(lesson1),
  lesson2: Object.assign(lesson2),
  lesson3: Object.assign(lesson3),
};*/

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })

console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumNumberStudents = object => {
  let arrayValues = Object.keys(object);
  let sum = 0;

  for (let index = 0; index < arrayValues.length; index += 1) {
    sum += object[arrayValues[index]].numeroEstudantes
  };
  return sum
};

console.log(sumNumberStudents(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (object, number) => Object.values(object)[number];

console.log(getValueByNumber(lesson1, 0));

