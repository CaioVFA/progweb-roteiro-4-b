let objeto = {
    id: 0,
    nome: "Pg",
    n: 3,
    a1: 7,
    r: 5
}

const Pa = ({n,a1,r}) => {
    let an = a1
    let soma = 0
    while (n > 0) {
        console.log(an)
        soma = soma + an
        an = an + r
        n = n - 1
    }
    console.log(soma)
}


const Pg = ({n,a1,r}) => {
    let an = a1
    let soma = 0
    while (n > 0) {
        console.log(an)
        soma = soma + an
        an = an * r
        n = n - 1
    }
    console.log(soma)
}

let func = objeto.nome;

if (func == "Pa")
    Pa(objeto)
else 
    Pg(objeto)
