const mostrarPrimos = (inicio = 0, fim = 100) => {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio];
    }

    const ehPrimo = num => {
        if (num < 2) 
            return false;
        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) 
                return false;
        }
        return true;
    };

    const primos = [];

    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    console.log(`Números primos entre ${inicio} e ${fim}:`, primos.join(', '));
};


mostrarPrimos();             
mostrarPrimos(50, 20);         
mostrarPrimos(10, 30);         
