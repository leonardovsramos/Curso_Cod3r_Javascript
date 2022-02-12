let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// 1 - Representa true como Booleano
isAtivo = 1;
console.log(!!isAtivo);

// 0 - Representa false como Booleano
isAtivo = 0;
console.log(!!isAtivo);

// "" - Representa false como Booleano
isAtivo = "";
console.log(!!isAtivo);

console.log("\n");

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"Teste");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("\n");

console.log("Os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("\n");

console.log("Para finalizar");
console.log(!!("" || null || 0 || "epa" || 123));

let nome1 = "";
console.log(nome1 || "Desconhecido!");


let nome2 = "Leo";
console.log(nome2 || "Desconhecido!");