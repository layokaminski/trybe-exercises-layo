const assert = require('assert');

const greetPeople = (people) => {
  let greetingPeople = [];

  for (let person in people) {
    greetingPeople.push(`Hello ${people[person]}`)
  }
  return greetingPeople;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// TDD - Test Driven Development

assert.deepStrictEqual(greetPeople(parameter), result);
