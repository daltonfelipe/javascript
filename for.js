// sintaxe do for

//  (definicao do incrementador; criterio de parada; incremento se criterio for falso)
for (let i = 0; i < 10; i++) {
    // escopo local do for
    // printa o valor de i em cada iteracao
    console.log(i);
    // fim do for
}

// define listas, vetores
var pesos = [51.50, 75.45, 53.76, 65.42, 56.18];
var alturas = [1.72, 1.87, 1.70, 1.65, 1.80]

// define uma lista vazia
var imcs = [];

// itera sobre 'i' de 0 a 4
for (let i = 0; i < pesos.length; i++){
    // adiciona o valor do calculo do imc a lista imcs em cada iteracao
    imcs.push(pesos[i]/(alturas[i]**2))
}
console.log(imcs);
