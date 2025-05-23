// letras maiusculas
let playlist = ["Funk", "Hip-Hop", "Pop"];

let maiuscula = playlist.map(item => item.toUpperCase());
console.log(`Maiúsculas com map: ${maiuscula.join(`, `)}`);


// letras minusculas
let minuscula = playlist.map(item => item.toUpperCase());
console.log(`Minúsculas com map: ${minuscula.join(`, `)}`);


// numeros
let numeros = [10, 20, 30, 40, 50];

let dobrados = numeros.map(n => n * 2);
console.log(`Valores dobrados: ${dobrados.join(`, `)}`);

let metade = numeros.map(n => n / 2);
console.log(`Valores pela metade: ${metade.join(`, `)}`);

let comTexto = numeros.map(n => `${n} pts`);
console.log(`Como texto: ${comTexto.join(`, `)}`);
