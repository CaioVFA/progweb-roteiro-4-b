let datas = "2 5"
const datasLista = datas.split(" ");


datasLista.forEach((element,i) => {
    datasLista[i] = parseInt(element);
});


let entrega = datasLista[0];
let final = datasLista[1];


//Nao entendi quando eu deveria imprimir "Eu odeio o prof. Florovsky!". Qual seria a condição caso
// para o aluno nao receber orientação?


if(final - entrega < 3)
    if(final + 2 >= 24)
        console.log("O trabalho está muito ruim! Não deu! Só no próximo ano agora.")
    console.log("O trabalho está muito ruim! TCC Apresentado!")
console.log("Muito bem! O aluno está apto a apresentar até o natal!");
