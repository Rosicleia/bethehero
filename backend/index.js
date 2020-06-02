//CRIANDO O SERVIDOR

//Importando o modulo express para dentro da variavel express
//Essa variavel contem todas as funcionalidades disponiveis do modulo express
const express = require ('express');


//Estou instanciando, criando minha aplicação
//Essa aplicação que depois vai ter todas as rotas, toda a parte de funcionalidade
const app = express();


//Para criar primeira rota, quando coloca só a / é porque quero a rota raiz
//Passa uma função como segundo parametro que recebe dois parametros requisição e resposta
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rosicléia Sales'
    })
});

//Vou mandar essa aplicação ouvir a porta 3333
//Quer dizer que quando eu digitar no navegador localhost:3333, vai acessar minha aplicação
app.listen(3333);