let datas = "20 20"
const datasLista = datas.split(" ");


datasLista.forEach((element,i) => {
    datasLista[i] = parseInt(element);
});


let entrega = datasLista[0];
let final = datasLista[1];

if (entrega > final) {
    console.log("Eu odeio o prof. Florovsky!");
} else if (final - entrega >= 3) {
    console.log("Muito bem! O aluno está apto a apresentar até o natal!");
} else {
    console.log("O trabalho está muito ruim!");
    if (final + 2 < 24) {
        console.log("TCC Apresentado!");
    } else {
        console.log("Não deu! Só no próximo ano agora.");
    }
}
