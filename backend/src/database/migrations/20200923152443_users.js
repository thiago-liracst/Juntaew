exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('nick').primary();
        table.string('senha').notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
