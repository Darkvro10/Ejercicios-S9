import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero entero positivo: ", function(numero) {
    numero = parseInt(numero);
    let suma = 0;

    for (let contador = 1; contador <= numero; contador++) {
        suma = suma + contador;
    }

    console.log("La suma total es: " + suma);
   
    rl.close();
});