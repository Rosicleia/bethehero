//CRIANDO O SERVIDOR

//Importando o modulo express para dentro da variavel express
//Essa variavel contem todas as funcionalidades disponiveis do modulo express
const express = require ('express');


//Estou instanciando, criando minha aplicação
//Essa aplicação que depois vai ter todas as rotas, toda a parte de funcionalidade
const app = express();

//Informar que vai utilizar JSON no corpo de toas as requisições
//Tem que vim antes das rotas
//Aqui estou falando para o express ir la no corpo da minha requisição e converter oo JSON em objeto javascript, transformar em algo entendivel pela aplicação
app.use(express.json());


//Para criar primeira rota, quando coloca só a / é porque quero a rota raiz
//Passa uma função como segundo parametro que recebe dois parametros requisição e resposta
//Rota é o caminho completo
//Recuso o que vem depois da barra e geralmente vai estar associado a uma tabela do banco
/*
    Metodo HTTP
    - GET: Utiliza para buscar uma informação do backend
    - POST: Utiliza para criar uma informação do backend
    - PUT: Utiliza para alterar uma informação do backend
    - DELETE: Utiliza para deletar uma informação do backend
*/

/*
    Tipos de Parâmetros
    - QUERY PARAMS: Parâmetro nomeados enviados na rota após "?", geralmente servem para filtros, paginação
    - ROUTE PARAMS: Parâmetro utilizado para identificar recursos (o que vem depois da /tabelas)
    - REQUEST BODY: Corpo da requisição utilizado para criar(POST) ou alterar(PUT) recursos
*/

//Para acessar os parâmetros dentro da rota utiliza o resquest e response
//Request: Guarda todos os dados que vem atraves da nossa requisição (usuario) em formato JSON
//Response: Retorna uma resposta para o usuário em formato JSON
//Para acessar utilizando Query:app.get('/users', (request, response) => {const params = request.query;...
//Para acessar utilizando Route: app.get('/users/:id', (request, response) => {const params = request.params;...
//Para acessar utilizando Request Body: app.post('/users', (request, response) => {const body = request.body;...
app.post('/users', (request, response) => {

    //Acessar parametros
    const body = request.body;
    console.log(body);

    //Response: Retorna uma resposta para o usuário em formato JSON
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rosicleia'
    })
});

//Vou mandar essa aplicação ouvir a porta 3333
//Quer dizer que quando eu digitar no navegador localhost:3333, vai acessar minha aplicação
app.listen(3333);