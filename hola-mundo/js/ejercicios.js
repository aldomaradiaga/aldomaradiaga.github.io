// EJERCICIO 1
// Pide 2 numeros y nos dice cual es mayor, menor o si son iguales

/* var num1 = parseInt(prompt("Introduce el primer numero: ", 0));
var num2 = parseInt(prompt("Introduce el segundo numero: ", 0));
console.log(num1, num2);

if (num1 == num2) {
    alert("Los numeros son iguales");
}else if (num1 > num2) {
    alert("El numero mayor es: " + num1);
    alert("El numero menor es: " + num2);
}else if (num1 < num2) {
    alert("El numero mayor es: " + num2);
    alert("El numero menor es: " + num1);
}else {
    alert("Introduce numeros correctos");
} */

// EJERCICIO 2
/* Utilizando un bucle, mostrar la media y la suma de los numeros inntroducidos
por el usuario hasta que haya un numero negativo, mostrar el resultado */

/* var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que ingreses un numero negativo", 0));
    if (isNaN(numero)) {
        numero = 0;
    }else if (numero >= 0){
        suma += numero;
        contador++;
    }
}while(numero >= 0)

alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numeros es: " + (suma/contador)); */


// EJERCICIO 3
// Hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario

/* var num1 = parseInt(prompt("Ingresa el primer numero: ", 0));
var num2 = parseInt(prompt("Ingresa el segundo numero: ", 0));

document.write("<h1>De " + num1 + " a " + num2 + " estan estos numeros:</h1>");
for(i = num1; i <= num2; i++) {
    document.write(i + "<br/>");
} */

// EJERCICIO 4
// Mostrar los numeros impares que hay entre 2 numeros introducidos por el usuario

/* var num1 = parseInt(prompt("Introduce el primer numero: ", 0));
var num2 = parseInt(prompt("Introduce el segundo numero: ", 0));

while(num1 < num2) {
    num1++;

    if(num1%2 != 0) {
        console.log("El " + num1 + " es impar");
    }
} */

// EJERCICIO 5
// Mostrar todos los numeros divisores de un numero introducido por el usuario

/* var num = parseInt(prompt("Ingresa un numero", 1));

for(var i = 1; i <= num; i++) {
    if (num%i == 0) {
        console.log("Divisor: " + i);
    }
} */

// EJERCICIO 6
// Muestra si un numero es par o impar

/* var num = parseInt(prompt("Introduce un numero: ", 0));

while(isNaN(num)) {
    num = parseInt(prompt("Introduce un numero: ", 0));
}

if(num%2 == 0) {
    alert("Es un numero par");
}else {
    alert("Es un numero impar");
} */

// EJERCICIO 7
// Tabla de multiplicar de un numero introducido por pantalla

/* var num = parseInt(prompt("De que numero quieres la tabla?", 0));

document.write("<h1>Esta es la tabla de multiplicacion del " + num + "<h1/>");
for(var i = 1; i <= 10; i++) {
    document.write(num + " X " + i + " = " + (i*num) + "<br/>");
} */


// EJERCICIO 8
// Hacer una calculadora que pida 2 numeros por pantalla

/* var num1 = parseInt(prompt("Introduce el primer numero: ", 0));
var num2 = parseInt(prompt("Introduce el segundo numero: ", 0));

while(isNaN(num1) && isNaN(num2)) {
    num1 = parseInt(prompt("Introduce el primer numero: ", 0));
    num2 = parseInt(prompt("Introduce el segundo numero: ", 0));
}

var resultado = "La suma es: " + (num1 + num2) + "<br/>" +
                "La resta es: " + (num1 - num2) + "<br/>" +
                "La multiplicacion es: " + (num1 * num2) + "<br/>" +
                "La division es: " + (num1 / num2) + "<br/>" 

var res = "La suma es: " + (num1 + num2) + " \n" +
                "La resta es: " + (num1 - num2) + " \n" +
                "La multiplicacion es: " + (num1 * num2) + " \n" +
                "La division es: " + (num1 / num2) + " \n" 
document.write(resultado);
alert(res);
console.log(res); */