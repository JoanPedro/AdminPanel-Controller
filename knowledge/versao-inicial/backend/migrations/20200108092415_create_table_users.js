exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.boolean('adminMaster').notNull().defaultTo(false)
        table.boolean('adminEnterprise').notNull().defaultTo(false)
        table.boolean('manager').notNull().defaultTo(false)
        table.boolean('customer').notNull().defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};