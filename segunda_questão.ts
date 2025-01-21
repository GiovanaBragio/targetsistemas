function isFibonacci(input: number): string {
    if (input < 0) {
        return `${input} não pertence à sequência de Fibonacci.`;
    }

    let firstElementFibonacci = 0;
    let seccondElementFibonacci = 1;

    if (input === firstElementFibonacci || input === seccondElementFibonacci) {
        return `${input} pertence à sequência de Fibonacci.`;
    }

    let nextElementFibonacci = firstElementFibonacci + seccondElementFibonacci;
    while (nextElementFibonacci <= input) {
        if (nextElementFibonacci === input) {
            return `${input} pertence à sequência de Fibonacci.`;
        }
        firstElementFibonacci = seccondElementFibonacci;
        seccondElementFibonacci = nextElementFibonacci;
        nextElementFibonacci = firstElementFibonacci + seccondElementFibonacci;
    }

    return `${input} não pertence à sequência de Fibonacci.`;
}

let input = prompt("Insira um numero para saber se pertenec a SEQUENCIA FIBONACCI:")
if (input !== null) {
    const inputNumber = Number(input);

    if (isNaN(inputNumber)) {
        console.log("Por favor, insira um número válido.");
    } else {
        console.log(isFibonacci(inputNumber));
    }
} else {
    console.log("Nenhum número foi fornecido.");
}
