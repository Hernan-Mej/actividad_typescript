// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Tupla
let person: [string, number] = ["Alice", 30]; // Una tupla que contiene un nombre (string) y una edad (number)

// Diccionario
let personInfo: { [key: string]: any } = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Accediendo a elementos de un array
console.log(numbers[0]); // Imprimirá 1
console.log(names[1]); // Imprimirá "Bob"

// Accediendo a elementos de una tupla
console.log(person[0]); // Imprimirá "Alice"
console.log(person[1]); // Imprimirá 30

// Accediendo a elementos de un diccionario
console.log(personInfo["name"]); // Imprimirá "Alice"
console.log(personInfo["age"]); // Imprimirá 30
console.log(personInfo["city"]); // Imprimirá "New York"

// Añadiendo elementos a un array
numbers.push(6);
console.log(numbers); // Imprimirá [1, 2, 3, 4, 5, 6]

// Modificando elementos de un diccionario
personInfo["age"] = 31;
console.log(personInfo["age"]); // Imprimirá 31

// Iterando sobre un array
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Iterando sobre un diccionario
for (let key in personInfo) {
    console.log(`${key}: ${personInfo[key]}`);
}
