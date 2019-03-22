/*

    if (tal coisa e verdadeira){
        faca isso;
    } senao se (outra coisa e verdadeira){
        faca outra coisa; 
    } senao {
        faca uma outra coisa;
    }

*/

var idade = 18;

var podeIrAfesta; 

if (idade >= 18){
    podeIrAfesta = true;
} else {
    podeIrAfesta = false;
}

imc = 75/(1.87**2);

var estado;

if (imc < 20){
    estado = 'subnutrido';
} else if (imc >20 && imc < 25){
    estado = "abaixo do peso";
} else if (imc > 25 && imc < 30){
    estado = "acima do peso";
} else if (imc > 30) {
    estado = "obeso";
} else {
    estado = "subnutrido ou obeso";
}




