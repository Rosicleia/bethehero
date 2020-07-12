const knex = require ('knex');
const configuration = require ('../../knexfile');

//Cria conexão utilizando o Knex e passa como parametro configuration.development que é a 
//conexão de desenvolvimento
const connection = knex(configuration.development);

//Exporta de dentro desse arquivo a conexão com o bando de dados
module.exports = connection;