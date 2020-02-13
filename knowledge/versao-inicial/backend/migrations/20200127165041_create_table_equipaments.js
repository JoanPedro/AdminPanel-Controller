exports.up = function(knex, Promise) {
    return knex.schema.createTable('equipaments', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('department').notNull()
        table.integer('marketId').references('id')
            .inTable('markets').notNull()

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('equipaments')
};