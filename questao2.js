let nome = "2 5"
const nomeLista = nome.split(" ");


nomeLista.forEach((element,i) => {
    nomeLista[i] = parseInt(element);
});


let entrega = nomeLista[0];
let final = nomeLista[1];

if(final - entrega < 3)
    if(final + 2 >= 24)
        console.log("O trabalho está muito ruim! Não deu! Só no próximo ano agora.")
    console.log("O trabalho está muito ruim! TCC Apresentado!")
console.log("Muito bem! O aluno está apto a apresentar até o natal!");
