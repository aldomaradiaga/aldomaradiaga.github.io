'use strict'

/*
1. Hacer un programa que pida 6 numeros y los muestre por pantalla
2. Mostrar el array entero (todos sus elementos) en el body y la consola
3. Ordenar el array y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar el numero de elementos del array
6. Busqueda de un valor introducido por el usuario, muestrar si lo encuetra y su indice
*/

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array - "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

// var numeros = new Array(6);
var numeros = [];

for (let i = 0; i  <= 5 ; i++) {
    // numeros[i] = parseInt(prompt("Introduce un numero: ", 0));
    numeros.push(parseInt(prompt("Introduce un numero: ", 0)));
}

// Mostrar en el body
mostrarArray(numeros, "Mostrar en el body");

// Mostrar array por consola
console.log(numeros);

// Ordenar y mostrar
numeros.sort((a, b) => a-b);
console.log(numeros);
mostrarArray(numeros, 'Ordenado');

// Invertir y mostrar
numeros.reverse();
console.log(numeros);
mostrarArray(numeros, 'Revertido');

// Mostrar el numero de elementos del array
document.write("<h1>El array tiene: "+numeros.length+" elementos"+"</h1>");
console.log("El array tiene: "+numeros.length+" elementos");

// Buscar y verificar valor y su indice
var busqueda = parseInt(prompt("Busca un numero: ", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<h1 style='color: green;'>¡¡¡ENCONTRADO!!!</h1>");
    document.write("<h1>La posición de la búsqueda es: "+posicion+" elementos"+"</h1>");
} else {
    document.write("<h1 style='color: red;'>¡¡¡NO ENCONTRADO!!!</h1>");
}