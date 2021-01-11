const { increment } = require("../connection");

exports.up = function(knex) {
    return knex.schema.createTable('eventos', function (table) {
        table.increments();
        table.string('criador').notNullable();
        table.foreign('criador').references('nick').inTable('users');
        table.decimal('local').notNullable();
        table.foreign('local').references('local').inTable('locais');
        table.string('nome').notNullable();
        table.decimal('dia').notNullable();
        table.decimal('mes').notNullable();
        table.decimal('inicio').notNullable();
        table.decimal('fim').notNullable();
        table.string('esporte').notNullable();
        table.decimal('totalVagas').notNullable();
        table.decimal('disponiveis').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('eventos');
};
