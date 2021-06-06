'use strict'

// Funcion para cambiar el color de la etiqueta seleccionada
function cambiarColor(color) {
    caja.style.background = color
};

// Conseguir elementos con un ID concreto
// forma 1 - getElement
// var caja  = document.getElementById('micaja');
// forma 2 - querySelector
var caja = document.querySelector('#micaja');

caja.innerHTML = "Cambio desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "White";
caja.className = "hola hola2";

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector('#miseccion');
var valor;

for(valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContext == 'string') {
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

// Conseguir elementos por su clase
var divsRojos = document.getElementsByClassName('verde');
var divsAmarillo = document.getElementsByClassName('amarillo');
var div;

divsAmarillo[0].style.background = 'yellow';

for(div in divsRojos) {
    if (divsRojos[div].className == 'verde') {
        divsRojos[div].style.background = 'green';
        divsRojos[div].style.color = 'white';
    }
}