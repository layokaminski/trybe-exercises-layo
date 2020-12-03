var paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
      
document.getElementById('page-title').innerText = 'O Rei Leão'

document.getElementById('second-paragraph').innerText = 'Scar acaba matando seu irmão Mufasa, atual rei do reino, e faz com que Simba fuja para longe. Simba por sua vez, encontra Timão e Pumba que o mostra o Hakuna Matata. Apó Nala o encontra e o pede para voltar e assumir o trono no lugar de Scar. Simba retorna ao reino, expulsa Scar (que é morto penas Hienas) e Simba assume o trono.'

document.getElementById('subtitle').innerText = 'Resumo do filme:'

let style = document.getElementsByClassName('style-paragraph'); 

for (let index = 0; index < style.length; index += 1) {
    style[index] = paragraph.style.color = 'blue' 
};
