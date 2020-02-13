exports.up = function(knex, Promise) {
    return knex.schema.createTable('workers', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('adminBusiness').notNull().defaultTo(false)
        table.boolean('adminMarket').notNull().defaultTo(false)
        table.boolean('adminNone').notNull().defaultTo(true)
        table.integer('businessId').references('id')
            .inTable('business').notNull()

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('workers')
};