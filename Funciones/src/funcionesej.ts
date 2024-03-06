function sum(a: number, b: number): number {
    return a + b;
}

function print(message: string): void {
    console.log(message);
}

function getRandomNumber(): number {
    return Math.random();
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function sayHello(): void {
    console.log("Hello!");
}

function addOne(num: number): number {
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