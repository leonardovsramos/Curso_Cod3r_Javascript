const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;

console.log(valores);

// Retorna a quantia de elemento do Array
console.log(valores.length);

// Adiciona elementos no final do Array
valores.push({id: 3}, false, null, "Teste");
console.log(valores);

// Remove o último elemento do Array e retorna como resultado
console.log(valores.pop());

// Remove o n-ésimo valor do Array
delete valores[0];
console.log(valores);

// Tipo do Array em Javascript - Tipo Objeto
console.log(typeof valores);