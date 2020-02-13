exports.up = function(knex, Promise) {
    return knex.schema.createTable('modulos', table => {
        table.increments('id').primary()
        table.float('potencyActive').notNull()
        table.float('potencyReactive').notNull()
        table.float('dimmingPower').notNull()
        table.string('hourFromPotency').notNull()
        table.string('hourFromDimming').notNull()
        table.string('profileActive').notNull()
        table.string('dateFromPotency').notNull()
        table.string('dateFromDimming').notNull()
        table.integer('hardwareId').references('id')
            .inTable('hardwares').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('modulos')
};