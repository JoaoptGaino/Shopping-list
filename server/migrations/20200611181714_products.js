
exports.up = function (knex) {
    return knex.schema.createTable('products', table => {
        table.increments('');
        table.text('name')
            .notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('products');
};
