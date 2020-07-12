const express = require ('express');

const OngController = require ('./controllers/OngController');
const IncidentController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');

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

//Estou criando uma sessão
routes.post('/sessions' , SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id' , IncidentController.delete);

//No Node fazemos assim para exportar uma variavel de dentro de uma arquivo
module.exports = routes;

