function verificaFibonacci(numero) {
    
    let num1 = 0;
    let num2 = 1;
    
    if (numero === 0 || numero === 1) {
        console.log("O número informado pertence à sequência de Fibonacci.");
        return;
    }

    while (num2 <= numero) {
       
        if (num2 === numero) {
            console.log("O número informado pertence à sequência de Fibonacci.");
            return;
        }
    
        let proximo = num1 + num2;
        num1 = num2;
        num2 = proximo;
    }
    console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

// Isira um número específico
let numeroTeste = 356;
verificaFibonacci(numeroTeste);
