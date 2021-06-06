'use strict'

// LocalStorage
// Comprobar disponibilidad del LocalStorage
if (typeof (Storage) !== 'undefined') {
    console.log('LocalStorage disponible');
} else {
    console.log('Incompatible con LocalStorage');
}

// Guardar datos
localStorage.setItem('titulo', 'Curso de Symfony con - ');

// Recuperar elementos o datos
document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo');

// Guardar objetos
var usuario = {
    nombre: 'Aldo Maradiaga',
    email: 'aldo@gmail.com',
    web: 'aldomaradiaga.com'
};

localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem('usuario'));

console.log(userjs);
document.querySelector('#peliculas').append(userjs.web);

// Eliminar datos
localStorage.removeItem('usuario');
localStorage.clear();