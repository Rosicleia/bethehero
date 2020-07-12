//CRIANDO O SERVIDOR

//Importando o modulo express para dentro da variavel express
//Essa variavel contem todas as funcionalidades disponiveis do modulo express
const express = require ('express');

//Módulo Cors que determina quem pode acessar nossa aplicação
const cors = require ('cors');

//Importar o arquivo de rotas
const routes = require ('./routes');
const { use } = require('./routes');


//Estou instanciando, criando minha aplicação
//Essa aplicação que depois vai ter todas as rotas, toda a parte de funcionalidade
const app = express();

//Permite que todos os nossos aplicações front-end possam acessar nossa aplicação back-end
app.use(cors());

//Informar que vai utilizar JSON no corpo de toas as requisições
//Tem que vim antes das rotas
//Aqui estou falando para o express ir la no corpo da minha requisição e converter oo JSON em objeto javascript, transformar em algo entendivel pela aplicação
app.use(express.json());

app.use(routes);


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

/*     
    Tipos de Bancos de Dados
    - SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server - Utiliza a linguagem SQL para comunicação com o 
    banco de dados (escrever, buscar dados, etc), todos esses seguem praticamente as mesmas regras, com algumas
    diferenças de cada um. BANCO DE DADOS RELACIONAL
    
    - NoSQL: MongoDB, CouchDB, etc - BANCO DE DADOS NÃO RELACIONAL, não ulitiza linguagem SQL, não é estruturado,
    cada banco tem sua linguagem
*/

/*
    Configurando o Banco de Dados
    Para fazer a comunicação com o BD existem três formas principais:

    - Instalar o Driver diretamete do BD (pacote oficial do BD). 
    EX: Selecto * from users

    - Utilizar a Query Builder, escredo a Query utilizando o javascript
    Ex: table('users').select('*').where()
    Nessa forma seria a melhor opção, pois vai estar pronto para aceitar qualquer BD SQL
    Vamos uar o Knext.js
*/

//Vou mandar essa aplicação ouvir a porta 3333
//Quer dizer que quando eu digitar no navegador localhost:3333, vai acessar minha aplicação
app.listen(3333);