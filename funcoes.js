

function nomeDaFuncao(parametros) {
    // faz alguma coisa aqui;
}

// OU

nomeDaFuncao = function(parametros){
    // faz alguma coisa aqui;
}

calculaImc = function(peso, altura){
    return peso/(altura**2);
}

var altura = 1.87;
var peso = 85.5;

var imc = calculaImc(peso, altura);

console.log(imc);
