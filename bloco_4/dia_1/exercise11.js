let salario = 3000
let salarioInss = 0
let salarioLiquido;

if (salario <= 1556.94) {
    salarioInss = salario - (salario * 0.08);
}
else if (salario > 1556.94 &&  salario <= 2594.92) {
    salarioInss = salario - (salario * 0.09);
}
else if (salario > 2594.92 &&  salario <= 5189.82) {
    salarioInss = salario - (salario * 0.11);
}
else if (salario > 5189.82) {
    salarioInss = salario - 570.88
}

let salarioCalculado = salarioInss

if (salarioCalculado < 1903.98) {
    salarioLiquido;
}
else if (salarioCalculado > 1903.98 &&  salarioCalculado <= 2826.65) {
    salarioLiquido = salarioCalculado - (salarioCalculado * 0.075 - 142.8);
}
else if (salarioCalculado > 2826.65 &&  salarioCalculado <= 3751.05) {
    salarioLiquido = salarioCalculado - (salarioCalculado * 0.15 - 354.80);
}
else if (salarioCalculado > 3751.05 &&  salarioCalculado <= 4664.68) {
    salarioLiquido = salarioCalculado - (salarioCalculado * 0.225 - 636.13);
}
else if (salarioCalculado > 4664.68) {
    salarioLiquido = salarioCalculado - (salarioCalculado * 0.275 - 869.36);
}

console.log(salarioLiquido);
