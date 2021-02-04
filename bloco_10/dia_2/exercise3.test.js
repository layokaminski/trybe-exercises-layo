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

describe('Testando Async/Await - findUserById', () => {
  describe('Quando o usuário existe', () => {
    test('Retorne o nome do usuário', async () => {
      expect.assertions(1);
      await expect(getUserName(5)).resolves.toBe('Paul');
    });
  });

  describe('Quando o usuário não existe', () => {
    test('Retorne uma mensagem de erro', async () => {
      expect.assertions(1);
      const id = 7
      await expect(getUserName(id)).rejects.toEqual({ error: 'User with ' + id + ' not found.' })
    });
  });
});