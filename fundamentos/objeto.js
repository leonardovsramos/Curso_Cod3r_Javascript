const prod1 = {};

prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.90;
prod1["Desconto Legal"] = 0.4; // Evite usar atributos com espaços

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blablabla: 2
        }
    }
}

console.log(prod2);

/* Exemplo de JSON
 * JSON != Object em Javascript
 * let teste = '{ "nome": "Camisa Polo", "preco": 79.90}';
 * console.log(typeof teste);
 */
