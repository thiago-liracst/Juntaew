const { increment } = require("../connection");

exports.up = function(knex) {
    return knex.schema.createTable('eventos', function (table) {
        table.increments();
        table.string('criador').notNullable();
        table.foreign('criador').references('nick').inTable('users');
        table.decimal('local').notNullable();
        table.foreign('local').references('id').inTable('locais');
        table.string('nome').notNullable();
        table.decimal('dia').notNullable();
        table.decimal('mes').notNullable();
        table.string('horario').notNullable();
        table.string('esporte').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('eventos');
};
