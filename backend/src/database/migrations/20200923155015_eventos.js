const { increment } = require("../connection");

exports.up = function(knex) {
    return knex.schema.createTable('eventos', function (table) {
        tableOpa.increments();
        table.string('criador').NotNullable();
        table.foreign('criador').references('nick').inTable('users');
        table.decimal('local').NotNullable();
        table.foreign('local').references('id').inTable('locais');
        table.string('nome').NotNullable();
        table.decimal('dia').NotNullable();
        table.decimal('mes').NotNullable();
        table.string('horario').NotNullable();
        table.string('esporte').NotNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('eventos');
};
