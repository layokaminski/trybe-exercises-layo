const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testando promise - findUserById', () => {
  describe('Quando o usuário existe', () => {
    test('Retorne o nome do usuário', () => {
      expect.assertions(1);
      return expect(getUserName(4)).resolves.toBe('Mark')
    });
  })

  describe('Quando o usuário não existe', () => {
    test('Retorne a mensagem de erro', () => {
      expect.assertions(1);
      const id = 7
      return expect(getUserName(id)).rejects.toEqual({ error: 'User with ' + id + ' not found.' });
    });
  })
});
