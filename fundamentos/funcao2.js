// Armazenando uma função dentro de uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);


// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return (a + b);
}

console.log(soma(2,3));


// Retorno Implícito - Função Arrow - Dois Parâmetros
const subtracao = (a, b) => a-b

console.log(subtracao(3,5));


// Retorno Implícito - Função Arrow - Um Parâmetro
const potencia = a => Math.pow(a,2);

console.log(potencia(3));