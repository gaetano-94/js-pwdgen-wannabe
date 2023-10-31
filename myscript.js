'use strict';

const elementNome = document.getElementById('nome');
const elementCognome = document.getElementById('cognome');
const elementColorePreferito = document.getElementById('colore');

elementNome.innerHTML = 'Il tuo nome: ';
elementCognome.innerHTML = 'Il tuo cognome: ';
elementColorePreferito.innerHTML = 'Il tuo colore preferito: ';

const nomeInput = prompt('inserisci il tuo nome');
console.log(nomeInput);
elementNome.innerHTML += nomeInput;

const cognomeInput = prompt('inserisci il tuo cognome');
console.log(cognomeInput);
elementCognome.innerHTML += cognomeInput;

const coloreInput = prompt('inserisci il tuo colore');
console.log(parseInt(coloreInput));
elementColorePreferito.innerHTML += coloreInput;
