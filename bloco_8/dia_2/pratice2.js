// Utilizando for

const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = [];
for(let i = 0; i < persons.length; i += 1){
  fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
}

console.log(fullNames);

// Utilizando map

const personsMap = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNamesMap = personsMap.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNamesMap); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]