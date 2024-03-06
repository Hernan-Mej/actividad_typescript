"use strict";
function sum(a, b) {
    return a + b;
}
function print(message) {
    console.log(message);
}
function getRandomNumber() {
    return Math.random();
}
function isEven(num) {
    return num % 2 === 0;
}
function sayHello() {
    console.log("Hello!");
}
function addOne(num) {
    return num + 1;
}
// Funciones
let resultadoSuma = sum(5, 3);
print("El resultado de la suma es: " + resultadoSuma);
let numeroAleatorio = getRandomNumber();
print("El número aleatorio es: " + numeroAleatorio);
let esPar = isEven(10);
print("El número 10 es par: " + esPar);
sayHello();
let numeroSumado = addOne(10);
print("El número 10 sumado a 1 es: " + numeroSumado);
