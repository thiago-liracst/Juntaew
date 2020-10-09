exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('nick').primary();
        table.string('senha').NotNullable();
        table.string('nome').NotNullable();
        table.string('email').NotNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
