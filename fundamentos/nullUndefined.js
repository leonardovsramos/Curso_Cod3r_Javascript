let valor; //Não inicializada
console.log(valor);

// null não representa nenhuma valor e nenhum endereço de memória
// Ausência de valor
// Variável está definida
valor = null;
console.log(valor);
// console.log(valor.toString()); Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

// Evite atribuir undefined
produto.preco = undefined;
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null // Sem preço
console.log(!!produto.preco);
console.log(produto);