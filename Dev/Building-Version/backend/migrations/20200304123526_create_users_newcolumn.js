exports.up = function(knex, Promise) {
    return knex.schema.table('users', table => {
        table.string('operacionalUrl')
        table.string('gerencialUrl')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', table => {
        table.dropColumn('operacionalUrl')
        table.dropColumn('gerencialUrl')
    })
};