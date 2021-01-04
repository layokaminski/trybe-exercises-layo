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
