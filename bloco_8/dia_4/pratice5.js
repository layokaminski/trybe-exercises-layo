// Praticando com default destructuring

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(z); // 0


const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
    firstName: "João",
    lastName: "Jr II"
};

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
};

console.log(nationality(otherPerson)); // Ivan is Russian
console.log(nationality(person));
