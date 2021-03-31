const fetch = require('node-fetch');
const fetchDogImage = require('./exercise6');

jest.mock('node-fetch');

it('deve buscar imagens de cachorros', () => {
  const image = {
    'message': "https://images.dog.ceo/breeds/collie-border/n02106166_2111.jpg",
    'status': "success"
  };

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(image),
  }));

  return fetchDogImage().then((data) => expect(data).toEqual("https://images.dog.ceo/breeds/collie-border/n02106166_2111.jpg"));
});