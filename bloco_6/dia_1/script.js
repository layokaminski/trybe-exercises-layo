const estadosBrasileiros = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo','Sergipe', 'Tocantins'];

function createOptions(estadosBrasileiros) {
  let seletor = document.querySelector('#estados');
  for (let index = 0; index < estadosBrasileiros.length; index += 1) {
    let option = document.createElement('option')
    option.innerHTML = estadosBrasileiros[index]
    option.value = estadosBrasileiros[index]
    seletor.appendChild(option)
  }
}
createOptions(estadosBrasileiros);

function validarData(data) {
  if (data.indexOf('-') === 2 || data.indexOf('-') === 5) {
    const dia = data.substr(0, 2);
    const mes = data.substr(3, 2);
    const ano = data.substr(6, 4);
    if ((dia > 0 && dia < 31) && (mes > 0 && mes <= 12) && (ano > 0 && ano.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('#data');
  let data = inputData.value;
  const userData = validateData(data);
  if (userData && data.length) {
    inputData.value = '';
    alert('invalida');
    return false;
  }
  return userData;
}