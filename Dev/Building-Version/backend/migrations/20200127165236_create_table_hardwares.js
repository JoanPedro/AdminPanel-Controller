exports.up = function(knex, Promise) {
    return knex.schema.createTable('hardwares', table => {
        table.increments('id').primary()
        table.float('area').notNull()
        table.integer('equipamentId').references('id')
            .inTable('equipaments').notNull()

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('hardwares')
};