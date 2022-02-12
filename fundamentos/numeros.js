const peso1 = 1.00;
const peso2 = Number("2.0");

console.log(peso1, peso2);

// Number.isInteger - Retorna se a variável é um número inteiro!
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const media = ((avaliacao1 * peso1) + (avaliacao2 * peso2)) / (peso1 + peso2)

// media.toFixed(param) - Retorna o valor número com uma determinada quantidade de casas decimais!
console.log(media.toFixed(2));

// media.toString() - Transforma a variável para o tipo String
console.log(media.toString());

// media.toString(2) - Transforma a variável para o tipo String em Binário
console.log(media.toString(2));
console.log(typeof media.toString(2));