import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de productos elaborados por dia: ", function(productosDiarios) {
    productosDiarios = parseInt(productosDiarios);

    let produccionTotal = 0;

    for (let dia = 1; dia <= 7; dia++) {
        produccionTotal = produccionTotal + productosDiarios;
    }

    console.log("Produccion total de la semana: " + produccionTotal + " productos");

    rl.close();
});