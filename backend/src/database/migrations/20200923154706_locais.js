exports.up = function(knex) {
    return knex.schema.createTable('locais', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('endereco');
        table.string('cidade').notNullable();
        table.string('uf').notNullable();
        table.decimal('valor').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locais');
};
