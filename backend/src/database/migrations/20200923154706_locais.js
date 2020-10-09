exports.up = function(knex) {
    return knex.schema.createTable('locais', function (table) {
        table.increments();
        table.string('nome').NotNullable();
        table.string('endereco').NotNullable();
        table.decimal('valor').NotNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locais');
};
