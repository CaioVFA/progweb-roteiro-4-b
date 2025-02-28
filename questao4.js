const notas = [3.5, 7.8, 9.1, 6.3, 8.0];

const atribuirConceitos = (notas, callback) => {
    console.log(notas.map(nota => callback(nota)));
  };


const conceitoNota = (nota) => {
    if (nota >= 0.0 && nota <= 4.9) return 'D';
    if (nota >= 5.0 && nota <= 6.9) return 'C';
    if (nota >= 7.0 && nota <= 8.9) return 'B';
    if (nota >= 9.0 && nota <= 10.0) return 'A';
  };

atribuirConceitos(notas, conceitoNota);

 