const express = require ('express');

//Pacote que cria string aleatoria (estou usando no id da Ong)
const crypto = require ('crypto');

//Estou desaclopando o modulo de rotas do Express em uma nova variavel
const routes = express.Router();

//Para acessar os parâmetros dentro da rota utiliza o resquest e response
//Request: Guarda todos os dados que vem atraves da nossa requisição (usuario) em formato JSON
//Response: Retorna uma resposta para o usuário em formato JSON
//Para acessar utilizando Query:app.get('/users', (request, response) => {const params = request.query;...
//Para acessar utilizando Route: app.get('/users/:id', (request, response) => {const params = request.params;...
//Para acessar utilizando Request Body: app.post('/users', (request, response) => {const body = request.body;...
/*routes.post('/users', (request, response) => {

    //Acessar parametros
    const body = request.body;
    console.log(body);

    //Response: Retorna uma resposta para o usuário em formato JSON
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rosicleia'
    })
});*/



routes.post('/ongs', (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    //Cria uma String com 4 caracteres aleatorios em hexadecimal
    const id = crypto.randomBytes(4).toString('HEX')

  
    //Response: Retorna uma resposta para o usuário em formato JSON
    return response.json({
    })
});
//No Node fazemos assim para exportar uma variavel de dentro de uma arquivo
module.exports = routes;

