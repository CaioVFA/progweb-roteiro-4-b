01) Um hacker invadiu o sistema ao qual você realiza o suporte, criptografou a tabela de endereço
e ainda colocou ameaças (para que você pague o resgate dos dados) em vários campos, em diversas
tabelas no banco de dados do sistema. Porém, a restauração do backup que você solicitou só estará
pronta no dia seguinte e você precisa informar aos diversos fãs (que acessam o sistema) do famoso
apresentador onde será o funeral dele. Só que o hacker não contava que você conhece o VIACEP
(https://viacep.com.br/) e que pode utilizá-lo para consultar os dados do endereço do Silvio Santos
internamente pelo sistema. Sabendo que o CEP da mansão Abravanel é 05650-000, preencha os
dados alterados pelo hacker a partir da consulta ao VIACEP. No sistema, você precisa gerar os
seguintes campos usando o operador de desestruturação: proprietario - CEP - bairro, cidade (lat,
lng), ou seja, mostre no console o resultado usando o recurso Template String.

Saída esperada: Silvio Santos - 05650-000 - Morumbi, São Paulo (-23.61919020307765,
-46.70793551534256)

const dono = {
"proprietario": "Silvio Santos",
"endereco": {
"cep":'hacked, pay to recover',
"logradouro": 'hacked, pay to recover',
"complemento": 'hacked, pay to recover',
"bairro": 'hacked, pay to recover',
"localidade": 'hacked, pay to recover',
"uf": '',
"geo": {
"lat": "-23.61919020307765",
"lng": "-46.70793551534256"
}
}
}

const resultado = `Coloque seu código aqui`;

console.log(resultado);


02) Anderson é um aluno muito esforçado e estudioso. Ele se envolve em várias atividades da
universidade. O final do ano está chegando, e com ele, o mês (dezembro) da apresentação de seu
TCC. Ele, cheio de atividades, precisa saber se será possível apresentar seu tcc antes do Natal! Mas, antes da realização de sua apresentação, seu trabalho precisa ser revisado por seu orientador
russo, o Prof. Florovsky.

Entrada
A entrada é composta por um valor E (0 < E < 25) que representa o dia no qual foi entregue o tcc
para revisão. Um valor D (0 < D < 25) representando a data final que o documento de TCC deve ser
entregue para revisão.

Saída
Mostre, para cada caso de teste, se Anderson apresentará ou não o tcc. A única possibilidade da
entrega não ser realizada na data é por falta de orientação de Florovsky. Caso não seja possível,
imprima "Eu odeio o prof. Florovsky!". Caso o trabalho seja entregue em até 3 dias antes do prazo
final, imprima "Muito bem! O aluno está apto a apresentar até o natal!". Caso contrário, sendo
muito próximo da data limite, imprima "O trabalho está muito ruim!". Nesse último caso, serão
adicionados mais dois dias para a realização das correções e, se a data final for menor que a data 24 (véspera do natal), ele poderá apresentar, sendo impresso "TCC Apresentado!", caso contrário imprima "Não deu! Só no próximo ano agora."

03) Escreva duas funções arrow, uma para progressão aritmética e outra para progressão geométrica. Estas funções receberão como parâmetros um objeto (criado por você, lembre-se que deves escolher bons nomes) contendo os seguinte parâmetros: id: Number (identificador da função); nome: String (nome da função); n: Number (número de termo), a1:Number (o primeiro termo) e r:Number (a razão). Esse objeto vai ser passado com parâmetro para as duas funções, e com o uso do operador de desestruturação, só devem ser passados como parâmetros os atributos n, a1 e r. As funções devem imprimir os n termos, bem como a soma dos elementos.

04) Escreva uma função do tipo Arrow que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. Atenção: a função deve utilizar alguma função callback.

05) Escreva uma função arrow que receba dois parâmetros: início e fim. Essa função deve imprimir todos os números primos que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.