class Perro {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    ladrar(): void {
        console.log(`${this.nombre} está ladrando: ¡Guau Guau!`);
    }
}

class PerroGuardian extends Perro {
    rastrear(): void {
        console.log(`${this.nombre} está rastreando.`);
    }
}

// Crear instancias de la clase PerroGuardián
const perroGuardian1 = new PerroGuardian("Rocky", 4);
const perroGuardian2 = new PerroGuardian("Luna", 2);

// Acceder a propiedades y métodos de la clase padre y la clase hija
console.log(`${perroGuardian1.nombre} tiene ${perroGuardian1.edad} años.`);
perroGuardian1.ladrar();
perroGuardian2.rastrear();