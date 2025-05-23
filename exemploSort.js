// com string
let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

let playlistOrdenada = playlist.sort();

console.log(`Playlist ordenada: ${playlistOrdenada}`);


// com números
let numeros = [10, 2000, 140, 4500, 5];
console.log(`Antes do sort: ${numeros}`);

// numeros crescente
let numerosOrdenadosCrescente = numeros.sort((a, b) => a - b);
console.log(`Números em ordem crescente ${numerosOrdenadosCrescente}`);

// numeros decrescente
let numerosOrdenadosDecrescente = numeros.sort((a, b) => b - a);
console.log(`Números em ordem decrescente ${numerosOrdenadosDecrescente}`);
