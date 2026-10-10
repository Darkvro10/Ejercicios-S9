import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el gasto diario de transporte: $", function(gastoDiario) {

    gastoDiario = parseFloat(gastoDiario);

    let gastoAcumulado = 0;

    for (let dia = 1; dia <= 6; dia++) {
        gastoAcumulado = gastoAcumulado + gastoDiario;

        console.log("Dia " + dia + ": gasto acumulado = $" + gastoAcumulado.toFixed(2));
    }

    console.log("Gasto total de los 6 dias: $" + gastoAcumulado.toFixed(2));

    rl.close();
});