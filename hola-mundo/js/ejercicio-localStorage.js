'use strict'

// Agregar datos al localStorage y mostrarlos en el body
var formulario = document.querySelector('#formPeliculas');
formulario.addEventListener('submit', function () {
    var titulo = document.querySelector('#addPelicula').value;
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector('#peliculas-list');
for (var i in localStorage) {
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement('li');
        li.append(localStorage[i]);
        ul.append(li);
    }
}

// Borrar datos del localStorage y del body
var borrarForm = document.querySelector('#form-Peliculas');
borrarForm.addEventListener('submit', function () {
    var titulo = document.querySelector('#deletePelicula').value;
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
    }
});