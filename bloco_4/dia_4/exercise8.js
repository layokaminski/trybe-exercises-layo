let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
};

let infoDonald = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
};

for (let key in info) { 
    if(info[key] === infoDonald[key]) {
        console.log('Ambas são recorrentes');
        
    }
    else{
        console.log(info[key] + ' e ' + infoDonald[key]);
    }
}