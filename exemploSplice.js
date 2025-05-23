let cores = ["Amarelo", "Azul", "Vermelho", "Cinza", "Preto", "Branco"];

console.log(`Antes do splice: ${cores}`);

// dentro do parenteses: o primeiro número é o primeiro indice que será removido, e o segundo é a quantidade de elementos que você quer excluir
let elementosRemovidos = cores.splice(2, 2);

console.log(`Depois do splice: ${cores}`);
console.log(`Elementos removidos: ${elementosRemovidos}`);


console.log(`    `);
console.log(cores);


console.log(`Antes do splice: ${cores}`);

let desafio = cores.splice(3, 3);

console.log(`Depois do splice: ${cores}`);
console.log(`Elementos removidos: ${desafio}`);

