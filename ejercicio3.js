import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de entradas vendidas por dia: ", function(entradasDiarias) {
    entradasDiarias = parseInt(entradasDiarias);

    let totalEntradas = 0;

    for (let dia = 1; dia <= 5; dia++) {
        totalEntradas = totalEntradas + entradasDiarias;
    }

    console.log("Total de entradas vendidas en 5 dias: " + totalEntradas);

    rl.close();
});