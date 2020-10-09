exports.up = function(knex) {
    return knex.schema.createTable('horarios', function (table) {
        table.increments();
        table.decimal('local').NotNullable();
        table.foreign('local').references('id').inTable('locais');
        table.string('dia').NotNullable();
        table.decimal('inicio').NotNullable();
        table.decimal('fim').NotNullable();
        table.string('email').NotNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('horarios');
};
