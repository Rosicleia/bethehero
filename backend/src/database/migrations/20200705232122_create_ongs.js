

//Método responsavel por criar as tabelas
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();

    });
  
};

//Caso eu volte atras do que eu fiz, no caso, criar a tabela eu exlui a tabela 
exports.down = function(knex) {
    return knex.schema.dropTable();
  
};
