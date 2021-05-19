exports.up = function(knex) {
    return knex.schema.createTable('horarios', function (table) {
        table.increments();
        table.string('local').notNullable();
        table.foreign('local').references('login').inTable('locais');
        table.string('dia').notNullable();
        table.decimal('inicio').notNullable();
        table.decimal('fim').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('horarios');
};
