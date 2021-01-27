// Parte I - Adicionando novas chaves (keys)

const professional = {
  name: 'Layo Kaminski',
  age: 28
};

console.log(professional)

const neKey = (object, key, value) =>   object[key] = value

neKey(professional, 'profissão', 'desenvolvedor');

console.log(professional)

// Parte II - Obeject.keys

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = (student) => {
  const arraySkills = Object.keys(student);
  for(i in arraySkills){
    console.log(`${arraySkills[i]}, Nível: ${student[arraySkills[i]]}`);
  }
};

skills(student1)
skills(student2)
