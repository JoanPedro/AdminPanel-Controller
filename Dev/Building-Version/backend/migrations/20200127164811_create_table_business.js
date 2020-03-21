exports.up = function(knex, Promise) {
    return knex.schema.createTable('business', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.integer('userId').references('id')
            .inTable('users').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('business')
};