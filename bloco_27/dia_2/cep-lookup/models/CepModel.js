const connection = require('./connection');

const regexPattern = /\d{5}-?\d{3}/;

const formatCep = (cep) => {
  if (regexPattern.test(cep)) return cep;


  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf
});

const getCep = async (cepToSearch) => {
  console.log(cepToSearch);
  const treatedCep = cepToSearch.replace('-', '');
  if (new RegExp()) return null;

  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep WHERE cep = ?';

  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));

  if (!result) return null;
  
  return getNewCep(result);
};

module.exports = {
  getCep,
}