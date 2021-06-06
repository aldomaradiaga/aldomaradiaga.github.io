'use strict'

// JSON - JavaScript Object Notation
// Objeto JSON
var pelicula = {
    name: 'Batman vs Superman',
    year: 2017,
    country: 'United States'
};

// Arreglo con JSON
var peliculas = [
    { name: 'La verdad duele', year: 2016, country: 'Spain' },
    pelicula
];

var cajaDePeliculas = document.querySelector('#peliculas');
var index;
for (index in peliculas) {
    var p = document.createElement('p');
    p.append(peliculas[index].name + ' - ' + peliculas[index].year);
    cajaDePeliculas.append(p);
}
