exports.up = function(knex, Promise) {
    return knex.schema.createTable('markets', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('locale').notNull()
        table.integer('businessId').references('id')
            .inTable('business').notNull()

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('markets')
};