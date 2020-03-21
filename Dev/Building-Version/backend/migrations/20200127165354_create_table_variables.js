exports.up = function(knex, Promise) {
    return knex.schema.createTable('variables', table => {
        table.increments('id').primary()
        table.float('value').notNull()
        table.string('unit').notNull()
        table.integer('hardwareId').references('id')
            .inTable('hardwares').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('variables')
};