exports.up = function(knex, Promise) {
    return knex.schema.table('variables', table => {
        table.string('hourStamp')
        table.string('dateStamp')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('variables', table => {
        table.dropColumn('hourStamp')
        table.dropColumn('dateStamp')
    })
};